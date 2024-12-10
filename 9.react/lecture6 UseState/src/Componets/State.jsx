import React from 'react'
import { useState } from 'react'
import { AnimalList } from './Data'


const State = () => {

    const [index, setindex] = useState(0)
    const [btn, setbtn] = useState("hidden")

    const [desc, setdesc] = useState("hidden")

    let List = [AnimalList[index]]

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
            // setbtn("")
        } else {
            setbtn("hidden")
        }
    }

    const descriptionhtoggle = () => {
        if (desc == "hidden") {
            setdesc("")
        } else {
            setdesc("hidden")
        }
    }

    return (
        <div className='bg-slate-400 mx-28 rounded-3xl'>
            <div className="flex justify-between m-10">
                <button className={`btn ${btn}`} onClick={previouscard}>Previuos</button>
                <button className='btn' onClick={nextcard} >Next</button>
            </div>
            <div className='flex flex-wrap justify-around gap-y-8'>
                {
                    List.map((item) => {
                        return (
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                                        className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${descriptionhtoggle}`}
                                        onClick={descriptionhtoggle}>
                                        Read more
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default State
