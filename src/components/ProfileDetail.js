import React from "react";
import UserDetail from "./UserDetail";
import Repos from "./Repos";

const ProfileDetail = ({ userDetail, repos }) => {
  return (
    <div>
      <UserDetail userDetail={userDetail} />
      <Repos repos={repos} />
    </div>
  );
};

export default ProfileDetail;
