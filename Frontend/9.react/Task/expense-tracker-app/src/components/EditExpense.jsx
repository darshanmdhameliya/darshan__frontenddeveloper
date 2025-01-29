import React from 'react'
import { useContext, useState } from 'react'
import ExpenseConetext from '../context/ExpenseContext'


const EditExpense = () => {

  const { Add_Expense, setAdd_Expense } = useContext(ExpenseConetext)
  const [editExpense, seteditExpense] = useState([]);

  console.log(editExpense.Amount)

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const updatedexpense = Add_Expense.map((Add_Expense) =>
      Add_Expense.id === editExpense.id ? editExpense : Add_Expense
    );
    setAdd_Expense(updatedexpense);
    navigate('/ExpenseList')       

  };

  const handleUpdateClick = (expense) => {
    seteditExpense(expense);
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
              <form onSubmit={(e) =>handleUpdateSubmit(e)}>
                <div className="flex-col space-y-4">
                  <div className="flex">
                    <p className="mr-9">Amount:</p>
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
                        seteditExpense({ ...editExpense, Description: e.target.value })
                      }
                      placeholder="Decription"
                    />
                  </div>

                  <div className="flex gap-3">
                    <p className="mr-4">Category:</p>
                    <label htmlFor="status" className='flex gap-5 items-center '>
                      <select name="Category" id="Category" className='p-2' value={editExpense.Category} onChange={(e) =>
                        seteditExpense({ ...editExpense, Category: e.target.value })
                      }>
                        <option value="Select">Select</option>
                        <option value="Bank">Bank</option>
                        <option value="Hospital">Hospital</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Telephone Bill">Telephone Bill</option>
                        <option value="Water Bill">Water Bill</option>
                        <option value="Basic">Basic</option>
                      </select>
                    </label>
                  </div>

                </div>
                <button
                  type="submit"
                  className="bg-red-600 text-white rounded-full hover:bg-red-100 hover:text-red-700 border hover:border-red-700 py-[5px] px-5 mt-5" onClick={() => handleUpdateClick(details)}
                >
                  Save
                </button>
              </form>

            </div>
          )
        })
      }
    </div>
  )
}

export default EditExpense
