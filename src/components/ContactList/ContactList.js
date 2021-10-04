import Item from "./Item";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <Item key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
