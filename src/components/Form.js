import React, { useState } from "react";

const Form = ({ setUserNameApp }) => {
  const [userName, setUsername] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName == "") {
      setSubmitError(true);
      setSubmitMessage("Can't be empty!");
      setTimeout(() => {
        setSubmitError(false);
      }, 1000);
    } else {
      setUserNameApp(userName);
      setUsername("");
    }
  };
  return (
    <div style={{ width: "50%", marginTop: "2rem" }}>
      {submitError && (
        <div className="alert alert-danger" role="alert">
          {submitMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type a username to search"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
