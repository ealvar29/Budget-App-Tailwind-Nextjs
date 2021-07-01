import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Budget = () => {
  const { budget } = useContext(AppContext);
  return (
    <div className="p-1 text-center bg-gray-400 rounded">
      <span>Budget: ${budget}</span>
    </div>
  );
};

export default Budget;
