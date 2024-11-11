// src/components/IngredientList.jsx
const IngredientList = (props) => {
  return (
    <ul>
      {props.stack.map((ingredient) => (
        <li>{ingredient}</li>
      ))}
    </ul>
  );
};

export default IngredientList;
