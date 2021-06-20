import { XCircleIcon } from "@heroicons/react/outline";

const ExpenseItem = ({ cost, name }) => {
  return (
    <li className="grid grid-cols-3 py-2">
      {name}
      <span className="text-center bg-gray-300 rounded">${cost}</span>
      <XCircleIcon className="w-6 h-6 text-blue-500" />
    </li>
  );
};
export default ExpenseItem;
