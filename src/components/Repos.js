import React from "react";

const Repos = ({ repos }) => {
  return (
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Recent Repositories</h1>
      <div
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          width: "60%",
        }}
      >
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {repos.map((repo, index) => (
            <div className="col" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      href={"https://www.github.com/" + repo.full_name}
                      target="_blank"
                    >
                      {repo.full_name.substring(
                        repo.full_name.indexOf("/") + 1,
                        repo.full_name.length
                      )}
                    </a>
                  </h5>
                  <p className="card-text">Language : {repo.language}</p>
                  <p className="card-text">Stars : {repo.stargazers_count}</p>
                  <p className="card-text">Forks : {repo.forks}</p>
                  <p className="card-text">Watchers : {repo.watchers}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repos;
