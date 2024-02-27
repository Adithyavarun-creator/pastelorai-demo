import React from "react";
import "./Success.css";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const movedashboard = () => {
    navigate("/");
  };

  const movebook = () => {
    navigate("/book-page");
  };
  return (
    <motion.section
      key="page"
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-20%", opacity: 0, transition: { duration: 0.6 } }}
      transition={{ delay: 0, duration: 0.6 }}
      className="section-success"
    >
      <div>
        <img
          src="https://img.freepik.com/free-vector/check-mark-green-3d_78370-4446.jpg?t=st=1709030626~exp=1709034226~hmac=1aed4bf66a489f567c6649276d03743d38c0efa45e341d2f79868c7a5f68df70&w=1060"
          alt=""
          className="successimage"
        />
      </div>
      <div>
        <h3 className="successtext">Your work is success</h3>
      </div>
      <div>
        <Button title="Back to Dashboard" submit={movedashboard} />
      </div>
      <div>
        <Button title="Back to Book" submit={movebook} />
      </div>
    </motion.section>
  );
};

export default Success;
