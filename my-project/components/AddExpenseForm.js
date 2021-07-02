import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";
const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
    setName("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-2">
        <div className="text-center">
          <label for="name">Name</label>
        </div>
        <div className="">
          <input
            required="required"
            type="text"
            className="border border-red-600 form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="text-center">
          <label for="cost">Cost</label>
        </div>
        <div className="">
          <input
            required="required"
            type="text"
            className="border border-red-600 form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
        <div className="text-center">
          <div className="">
            <button type="submit" className="mt-3 btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
