import React from 'react'
import Navbar from './Navbar'
import AddExpense from '../components/AddExpense'
import ExpenseList from '../components/ExpenseList'
import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import EditExpense from '../components/EditExpense'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar />}>
            <Route path='/' element={<AddExpense />} />
            <Route path="/ExpenseList" element={<ExpenseList />} />
            <Route path="/EditExpense" element={<EditExpense/>} />
        </Route>
    )
)

const OldVersion = () => {
    return (
        <>
           <RouterProvider router={router}></RouterProvider>
        </>
    )
}
export default OldVersion
