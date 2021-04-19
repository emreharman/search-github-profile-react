import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ProfileDetail from "./components/ProfileDetail";
import axios from "axios";

function App() {
  const [userDetail, setUserDetail] = useState("");
  const [repos, setRepos] = useState("");
  const [userName, setUserName] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const userURL = `https://api.github.com/users/${userName}`;
  const reposURL = `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:%20asc`;
  useEffect(() => {
    if (userName != "") {
      axios
        .get(userURL)
        .then((res) => setUserDetail(res.data))
        .catch((err) => {
          setFetchError(err);
          setTimeout(() => {
            setFetchError(null);
          }, 1000);
        });
      axios
        .get(reposURL)
        .then((res) => setRepos(res.data))
        .catch((err) => {
          setFetchError(err);
          setTimeout(() => {
            setFetchError(null);
          }, 1000);
        });
    }
  }, [userName]);
  return (
    <div className="App">
      <h1>Search GitHub Profile App</h1>
      {fetchError != null ? (
        <div
          className="alert alert-danger"
          role="alert"
          style={{ width: "50%" }}
        >
          User couldn't found.
        </div>
      ) : null}
      <Form setUserNameApp={setUserName} />
      {userDetail != "" && repos != "" ? (
        <ProfileDetail userDetail={userDetail} repos={repos} />
      ) : null}
    </div>
  );
}

export default App;
