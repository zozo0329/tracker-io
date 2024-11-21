import { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Form from "./components/NewExpense/Form";

function App() {
  const [expenses, setExpenses] = useState([]);

  const AddExpenseHandler = (enteredForm) => {
    const obj = {
      ...enteredForm,
      id: Math.random().toString(),
    };
    setExpenses((oldExpenses) => [...oldExpenses, obj]);
  };
  return (
    <div className="body">
      <div className="form-section">
        <Form addHandler={AddExpenseHandler} />
      </div>
      <div className="main">
        {expenses.map((value, i) => {
          console.log(i);
          return (
            <ExpenseItem
              date={value.date}
              title={value.title}
              amount={value.amount}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
