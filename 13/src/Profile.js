import React from "react";

const data = {
  dasom: {
    name: "이다솜",
    description: "까망이 주인",
  },
  kkamang: {
    name: "까망이",
    description: "고양이",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>없는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
