import React, { useContext, useState } from 'react'
import ExpenseConetext from '../context/ExpenseContext'

const ExpenseList = () => {

  const { Add_Expense, setAdd_Expense } = useContext(ExpenseConetext)
  const [editExpense, seteditExpense] = useState(null);


  const handleUpdateClick = (Add_Expense) => {
    seteditExpense(Add_Expense);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const updatedexpense = Add_Expense.map((Add_Expense) =>
      Add_Expense.id === editExpense.id ? editExpense : Add_Expense
    );
    setAdd_Expense(updatedexpense);
    seteditExpense(null);
  };


  const handleDelete = (id) => {
    const updatedexpenselist = Add_Expense.filter((Add_Expense) => Add_Expense.id !== id);
    setAdd_Expense(updatedexpenselist);
  };

  return (
    <div>
      {
        Add_Expense.map((details) => {
          return (
            <div
              className="w-full max-w-md p-4 bg-neutral-400 border border-gray-200 rounded-lg shadow sm:p-8"
              key={details.id}
            >
              {editExpense && editExpense.id === details.id ? (
                <form onSubmit={handleUpdateSubmit}>
                  <div className="flex-col space-y-4">
                    <div className="flex">
                      <p className="mr-8">Amount:</p>
                      <input
                        type="text"
                        className="p-1"
                        value={editExpense.Amount}
                        onChange={(e) =>
                          seteditExpense({ ...editExpense, Amount: e.target.value })
                        }
                        placeholder="Amount"
                      />
                    </div>
                    <div className="flex">
                      <p className="mr-3">Description:</p>
                      <input
                        type="text"
                        className="p-1"
                        value={editExpense.Description}
                        onChange={(e) =>
                          seteditExpense({ ...editExpense, Amount: e.target.value })
                        }
                        placeholder="Decription"
                      />
                    </div>
                    <div className="flex">
                      <p className="mr-4">Category:</p>
                      <input
                        type="text"
                        className="p-1"
                        value={editExpense.status}
                        onChange={(e) =>
                          seteditExpense({ ...editExpense, Category: e.target.value })
                        }
                        placeholder="Category"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-red-600 text-white rounded-full hover:bg-red-100 hover:text-red-700 border hover:border-red-700 py-[5px] px-5 mt-5"
                  >
                    Save
                  </button>
                </form>
              ) : (
                <div>
                  <p>Amount: {details.Amount}</p>
                  <p>Description: {details.Description}</p>
                  <p>Category: {details.Category}</p>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 mt-5 gap-4">
                    <button
                      className="bg-green-600 text-white rounded-full hover:bg-green-100 hover:text-green-700 border hover:border-green-700 py-1 px-3"
                      onClick={handleUpdateClick(details)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-600 text-white rounded-full hover:bg-red-100 hover:text-red-700 border hover:border-red-700 py-1 px-3"
                      onClick={handleDelete(details.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          )
        })
      }
    </div>
  )
}

export default ExpenseList
