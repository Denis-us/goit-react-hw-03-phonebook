import React from "react";
import styles from "./Input.module.css";

const Input = ({ type, value, handleChange, placeholder, name, id }) => {
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      id={id}
    />
  );
};

export default Input;
