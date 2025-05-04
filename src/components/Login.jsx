import React, { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center my-8">
      <div className="card card-border bg-base-300 w-96 ">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div>
            <fieldset className="fieldset my-4">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="text"
                className="input"
                placeholder="Please Enter Email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
              {/* <p className="fieldset-label">Optional</p> */}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password:</legend>
              <input
                type="password"
                className="input"
                placeholder="Please Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <p className="fieldset-label">Optional</p> */}
            </fieldset>
          </div>
          <div className="card-actions justify-center mt-2">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
