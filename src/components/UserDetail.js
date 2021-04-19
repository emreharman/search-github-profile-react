import React from "react";

const UserDetail = ({ userDetail }) => {
  return (
    <div
      style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}
    >
      <div className="card">
        <img src={userDetail.avatar_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{userDetail.login}</h5>
          <p className="card-text">{userDetail.bio}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Location : {userDetail.location}</li>
          <li className="list-group-item">
            Company :{" "}
            {userDetail.company != null ? (
              <span>{userDetail.company}</span>
            ) : (
              <span>-</span>
            )}
          </li>
          <li className="list-group-item">
            Followers : {userDetail.followers}
          </li>
          <li className="list-group-item">
            Following : {userDetail.following}
          </li>
        </ul>
        <div className="card-body">
          <a href={userDetail.html_url} target="_blank" className="card-link">
            Visit Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
