import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, skills, about, age, gender } = user;
  return (
    <div className="card bg-base-200 w-96 shadow-lg ">
      <figure>
        <img src={photoUrl} alt="photo" className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        {age && gender && <span>{`${age}, ${gender}`}</span>}
        <span>{about}</span>
      </div>
      <div className="card-actions justify-center py-2">
        <button className="btn btn-primary cursor-pointer">Ignore</button>
        <button className="btn btn-secondary cursor-pointer">Send Request</button>
      </div>
    </div>
  );
};

export default UserCard;
