const Item = ({ name, number }) => {
  return (
    <li>
      <p>{name}:</p>
      <p>{number}</p>
      <button>Delete</button>
    </li>
  );
};

export default Item;
