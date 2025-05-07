import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const Requests = () => {
  const [receivedRequests, setReceivedRequests] = useState([]);

  const getReceivedRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });

      console.log("received", res);
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReceivedRequests();
  }, []);
  return <div></div>;
};

export default Requests;
