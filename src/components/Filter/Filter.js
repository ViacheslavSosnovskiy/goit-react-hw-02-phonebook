const Filter = () => {
  return (
    <label>
      Find contacts by name
      <input type="text" />
    </label>
  );
};

export default Filter;

// ===================================//

// const Filter = ({ value, onChange }) => {
//   <label>
//     <input type="text" value={value} onChange={onChange} />
//     Фильтр по имени
//   </label>;
// };

// export default Filter;
