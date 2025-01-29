import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import { v4 as uuidv4 } from 'uuid';


const AddExpense = () => {

  const [Amount, setAmount] = useState('')
  const [Description, setDescription] = useState('')
  const [Category, setCategory] = useState('')

  const id = uuidv4();

  const { Add_Expense } = useContext(ExpenseContext)
  const { setAdd_Expense } = useContext(ExpenseContext)

  console.log(Add_Expense);


  const handleButton = (e) => {
    if ((Amount && Description && Category) == '') {
      alert("Please enter a value")
    } else {
      e.preventDefault()
      setAdd_Expense([...Add_Expense, { id, Amount, Description, Category }])
      setAmount('');
      setDescription('');
      setCategory('')
    }
  }

  return (

    <div className='bg-black h-[calc(100svh-60px)]'>
      <div className='container mx-auto flex flex-col justify-center items-start pl-40 gap-6 h-full' >
        <div className='flex flex-col justify-center items-start gap-6 border-2 border-yellow-200 p-10 rounded-3xl '>
          <label htmlFor="title" className='flex gap-5 items-center'>
            <p className='text-white mr-5' > Amount </p>
            <input type="number" placeholder='enter a Amount' className='p-2' id='Amount' value={Amount} onChange={(e) => setAmount(e.target.value)} />
          </label>

          <label htmlFor="author" className='flex gap-5 items-center'>
            <p className='text-white'> Description </p>
            <input type="text" placeholder='Add a Description' className='p-2' id='Description' value={Description} onChange={(e) => setDescription(e.target.value)} />
          </label>

          <label htmlFor="status" className='flex gap-5 items-center'>
            <p className='text-white mr-4'> Category </p>
            <select name="Category" id="Category" className='p-2' value={Category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Select">Select</option>
              <option value="Bank">Bank</option>
              <option value="Hospital">Hospital</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Telephone Bill">Telephone Bill</option>
              <option value="Water Bill">Water Bill</option>
              <option value="Basic">Basic</option>
            </select>
          </label>
          <button className='bg-blue-600 px-5 py-1 rounded border hover:border-blue-800 text-white hover:text-black hover:bg-white' onClick={handleButton}>Add</button>
        </div>

      </div>
    </div>

  )
}

export default AddExpense
