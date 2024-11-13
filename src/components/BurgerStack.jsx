const BurgerStack = ({ removeFromBurger, stack }) => {
  return (
    <ul>
      {stack.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name},<button onClick={() => removeFromBurger(ingredient, index)}>-</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
