import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Swipe = ({ user }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-100, 100], [-10, 10]);
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      setTimeout(() => {
        dispatch(removeUserFromFeed(userId));
      }, 0);
    } catch (err) {

      console.log(err);
    }
  };

  const swipeCard = (direction) => {
    const distance = direction === "left" ? -1000 : 1000;
    animate(x, distance, {
      duration: 0.4,
      ease: "easeOut",
      onComplete: async () => {
        await handleSendRequest(
          direction === "left" ? "ignored" : "interested",
          user._id
        );
      },
    });
  };

  return (
    <motion.div
      className="card"
      style={{ x, rotate }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(event, info) => {
        if (info.offset.x > 100) {
          // swipe right
          handleSendRequest("interested",user._id)
        } else if (info.offset.x < -100) {
          // swipe left
          handleSendRequest("ignored", user._id)
        }
      }}

    >
      <div className="relative w-80 h-[500px] rounded-2xl overflow-hidden shadow-lg group">
        {/* Background Photo */}
        <img
          src={user?.photoUrl}
          alt="Profile"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Text Content on Top */}
        <div className="absolute bottom-20 left-4 right-4 text-white">
          <h2 className="text-2xl font-bold">{`${user.firstName} ${user.lastName}`}</h2>
          <p className="text-sm mt-1">{`Photographer • ${user?.age} • New York`}</p>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 px-4">
          <button
            className="btn bg-base-300 w-10 h-10 rounded-full"
            onClick={() => swipeCard("left")}
          >
            ❌
          </button>
          <button
            className="btn bg-base-300 w-10 h-10 rounded-full"
            onClick={() => swipeCard("right")}
          >
            ❤️
          </button>
        </div>
      </div>
    </motion.div>
  );
};


export default Swipe;
