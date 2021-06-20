import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 12, name: "shopping", cost: 40 },
    { id: 13, name: "holiday", cost: 10 },
    { id: 14, name: "gas", cost: 50 },
    { id: 15, name: "PS5", cost: 450 },
  ];
  console.log(expenses);
  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
