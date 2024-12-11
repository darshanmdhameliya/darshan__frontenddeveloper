import React from 'react'
import { useState } from 'react'
import { AnimalList } from './Data'


const State = () => {

    const [index, setindex] = useState(0)
    const [btn, setbtn] = useState("hidden")
    const [desc, setdesc] = useState()
    const [input, setinput] = useState(index)



    let List = [AnimalList[index]]
    const handlechange = (e) => {
        setinput(e.target.value)
    }


    const nextcard = () => {
        if (index == 9) {
            setindex(0)
        } else {
            setindex(index + 1)
            setbtn("")
        }
    }

    const previouscard = () => {
        if (index > 0) {
            setindex(index - 1)
            console.log(setindex);
        } else {
            setbtn("hidden")
        }
    }

    const descriptiontoggle = () => {
        if (desc == "hidden") {
            setdesc("")
        } else {
            setdesc("hidden")
        }
    }

    const backgroundimage1 = [
        {
            id: 1,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3NvP9iscRhe4eUzJfJrOmWzHC6UUeYX8DA&s",
        },
        {
            id: 2,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeNkzNo0k84UrZbVpiemWG8KOi5utuyPYBg&s",
        },
        {
            id: 3,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLoF72c0vsrbSbxYOqekzu07QhMO18K0ajGg&s",
        },
        {
            id: 4,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsDMHRyfydmrBsa0y8pWeX2WwtJQGm4BCEg&s",
        },
        {
            id: 5,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG530-SzSnN9eHckeiJy6RGdHdCLCq6Hwy6A&s",
        },
        {
            id: 6,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQenfIpLzcbaVCSp30x5ci5VDN-HuG_qEbakg&s",
        },
        {
            id: 7,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpqbL4UTlspkukj31dK8vWLpnJBJQwuNKHw&s",
        },
        {
            id: 8,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLvxO-BuIwoVkjqRW0uUwxdOlnN312oBDfww&s",
        },
        {
            id: 9,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpVKp9_AeA1bp6qbvWJ_yIMnJeakSHSoikbA&s",
        },
        {
            id: 10,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUQhkZpDhLL9i7eP8Fg8-n5MGLBIEO470QcQ&s",
        },
    ]

    const handleclick = () => {
        if (input == index) {
           alert("your value same as index");
        } else {
            setindex(input)
        }
    }

    const bcimage = backgroundimage1[index].img

    return (
        <>

            < div className={`bg-slate-400 mx-28  rounded-3xl bg-no-repeat bg-cover  bg-gradient-to-r from-purple-500 to-pink-500 `} style={{ backgroundImage: `url(${bcimage})` }}
            >
                <div className="flex justify-between m-10">
                    <button className={`btn ${btn}`} onClick={previouscard}>Previuos</button>
                    <div className="">
                        <input className='h-5 mt-5 rounded-2xl' type="text" placeholder='Enter the index' onChange={handlechange} value={input} />
                        <button className='btn' onClick={handleclick} >Click</button>
                    </div>
                    <button className={`btn`} onClick={nextcard} >Next</button>
                </div>
                <div className='flex flex-wrap justify-around gap-y-8 '>
                    {
                        List.map((item) => {
                            return (
                                <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
                                    <a href="#">
                                        <img
                                            className="rounded-t-lg h-52 w-full object-cover object-top"
                                            src={item.image}
                                            alt=""
                                        />
                                    </a>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                {item.name}
                                            </h5>
                                        </a>
                                        <p className={`mb-3 font-normal text-gray-700 dark:text-gray-400 ${desc}`}>
                                            {item.description}
                                        </p>
                                        <a
                                            href="#"
                                            className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${descriptiontoggle}`}
                                            onClick={descriptiontoggle}>
                                            Read more
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        </>
    )
}

export default State
