import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../UI/Card.css";
import { useState } from "react";
//
function ExpenseItem(props) {
  const [status, setStatus] = useState("");
  const statusHandler = () => {
    setStatus("Paid ✔");
  };
  return (
    <Card>
      <div onClick={statusHandler} className="expense-container">
        <ExpenseDate date={props.date} />
        <h1>{status}</h1>
        <div className="item">
          <h2>{props.title}</h2>
          <p>${props.amount}</p>
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
