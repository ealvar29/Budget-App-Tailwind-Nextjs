const AddExpenseForm = () => {
  return (
    <form>
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
