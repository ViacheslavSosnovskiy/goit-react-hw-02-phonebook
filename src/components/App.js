import React, { Component } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

// import shortid from "shortid";

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

  addContact = (person) => {
    // const contact = {
    //   id: shortid.generate(),
    //   name,
    //   number,
    // };
    // this.setState((prevState) => ({
    //   contacts: [contact, ...prevState.contacts],
    // }));
  };

  submitForm = (e) => {
    console.log(e);
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    // const { name, number } = this.state.contacts;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.submitForm} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}

export default App;

// ================================================== //

// import React, { Component } from "react";
// import Form from "./Form/Form";
// import Filter from "./Filter/Filter";

// class App extends Component {
//   state = {
//     todos: "todos",
//     filter: "",
//   };

//   formSubmitHandler = (data) => {
//     console.log(data);
//   };

//   chacgeFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   render() {
//     const { todos, filter } = this.state;
//     return (
//       <>
//         <Form onSubmit={this.formSubmitHandler} />
//         <Filter value={filter} onChange={this.chacgeFilter} />
//       </>
//     );
//   }
// }

// export default App;
