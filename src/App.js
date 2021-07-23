import React, { Component } from "react";
import Form from "./components/Form/Form";
import Section from "./components/Section/Section";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = (data) => {
    const { name, number } = data;
    const { contacts } = this.state;
    const newContact = { id: uuidv4(), name, number };

    contacts.some((el) => el.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((todo) =>
      todo.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (contactsId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactsId
      ),
    }));
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title={"Phonebook"}>
          <Form onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title={"Contacts"}>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
