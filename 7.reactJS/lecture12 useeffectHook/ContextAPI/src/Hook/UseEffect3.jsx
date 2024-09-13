import React from 'react'
import { useEffect, useState } from 'react'

const UseEffect3 = () => {

    const [data, setdata] = useState([])

    console.log('data', data);

    useEffect(() => {
        let res = fetch('http://localhost:3000/product')
            .then((res) => res.json())
            .then((res) => setdata(res))
        console.log(res);
    }, [])

    return (
        <div>
            {
                data.map((item) => {
                    return (
                        <>
                            <div className="w-[300px] rounded-md border">
                                <img
                                    src={item.image}
                                    alt="Laptop"
                                    className="h-[200px] w-full rounded-t-md object-cover"
                                />
                                <div className="p-4">
                                    <h1 className="inline-flex items-center text-lg font-semibold">
                                        {item.title}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                        >
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </h1>
                                    <p className="mt-3 text-sm text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default UseEffect3
