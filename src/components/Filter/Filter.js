import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default Filter;
