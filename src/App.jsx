import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Form from "./components/NewExpense/Form";
function App() {
  const expenses = [
    {
      Id: "e1",
      title: "Car Insurance",
      amount: 1250.25,
      date: new Date(2021, 1, 11),
    },
    {
      Id: "e2",
      title: "Toilet Paper",
      amount: 50.25,
      date: new Date(2024, 5, 25),
    },
    {
      Id: "e3",
      title: "Electric Bill",
      amount: 4250.25,
      date: new Date(2025, 2, 22),
    },
    {
      Id: "e4",
      title: "Water Bill",
      amount: 250.25,
      date: new Date(2021, 6, 15),
    },
  ];
  return (
    <div className="body">
      <div className="form-section">
        <Form />
      </div>
      <div className="main">
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
