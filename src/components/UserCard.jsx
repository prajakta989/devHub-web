import React from "react";

const UserCard = ({ user }) => {
  console.log("user", user);
  const { firstName, lastName, photoUrl, skills, about, age, gender } = user;
  return (
    <div className="card bg-base-200 w-80 shadow-lg ">
      <figure>
        <img src={photoUrl} alt="photo" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        {age && gender && <p>{`${age}, ${gender}`}</p>}
        <p>{about}</p>
      </div>
      <div className="card-actions justify-center py-2">
        <button className="btn btn-primary">Ignore</button>
        <button className="btn btn-secondary">Send Request</button>
      </div>
    </div>
  );
};

export default UserCard;
