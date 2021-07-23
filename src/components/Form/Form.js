import React, { Component } from "react";
import Input from "../Input/Input";
import styles from "./Form.module.css";

import shortid from "shortid";

class Form extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("this.state", this.state);
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.label}>Name</label>
        <Input
          type={"text"}
          value={name}
          placeholder={"enter your name"}
          name={"name"}
          handleChange={this.handleChange}
          id={this.nameInputId}
        />

        <label className={styles.label}>Number</label>
        <Input
          type={"tel"}
          value={number}
          placeholder={"enter your number"}
          name={"number"}
          handleChange={this.handleChange}
          id={this.numberInputId}
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
