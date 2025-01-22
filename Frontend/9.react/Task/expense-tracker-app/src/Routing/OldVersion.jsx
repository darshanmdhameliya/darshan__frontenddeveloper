import React from 'react'
import Navbar from './Navbar'
import AddExpense from '../components/AddExpense'
import ExpenseList from '../components/ExpenseList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const OldVersion = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<AddExpense />} />
                    <Route path="/ExpenseList" element={<ExpenseList />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default OldVersion
