import React, { useState } from 'react'
import { useAuth } from '../Context/AuthContext'
import { useNavigate } from "react-router-dom"

const SignUp = () => {

    const navigate = useNavigate()

    const { user, setUser } = useAuth()
    console.log("user", user);


    const [formData, setformData] = useState({
        username: '',
        password: ''
    })

    console.log("formData", formData);



    const handlesubmit = (e) => {
        e.preventDefault()
        setUser(formData)
        navigate('/login')
        setformData({ username: '', password: '' })
    }


    return (
        <form onSubmit={handlesubmit}>
            <div className='bg-black h-[calc(100svh-60px)]'>
                <div className='container mx-auto flex flex-col justify-center items-start pl-40 gap-6 h-full' >
                    <div className='flex flex-col justify-center items-start gap-6 border-2 border-yellow-200 p-10 rounded-3xl '>
                        <label htmlFor="title" className='flex gap-5 items-center'>
                            <p className='text-white'> Username </p>
                            <input type="text" placeholder='enter a Amount' value={formData.username} onChange={(e) => setformData((prev) => ({ ...prev, username: e.target.value }))} className='p-2' />
                        </label>

                        <label htmlFor="author" className='flex gap-5 items-center'>
                            <p className='text-white'> Password </p>
                            <input type="password" placeholder='Add a Description' value={formData.password} onChange={(e) => setformData((prev) => ({ ...prev, password: e.target.value }))} className='p-2' />
                        </label>

                        <button className='bg-blue-600 px-5 py-1 rounded border hover:border-blue-800 text-white hover:text-black hover:bg-white'>Submit</button>
                    </div>

                </div>
            </div>
        </form>
    )
}

export default SignUp
