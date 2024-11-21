import "./Form.css";
import { useState } from "react";
const Form = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    const data = e.target.value;
    setTitle(data);
  };
  const amountHandler = (e) => {
    const data = e.target.value;
    setAmount(data);
  };
  const dateHandler = (e) => {
    const data = e.target.value;
    setDate(data);
  };
  // FOR SUBMIT BUTTON
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    console.log(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form">
        <div className="input-form">
          <input
            value={title}
            onChange={titleChangeHandler}
            type="text"
            placeholder="Title"
          />
        </div>
        <div className="input-form">
          <input
            value={amount}
            onChange={amountHandler}
            type="number"
            placeholder="Amount"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="input-form">
          <input value={date} onChange={dateHandler} type="date" />
        </div>
        <div className="btn">
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};
export default Form;
