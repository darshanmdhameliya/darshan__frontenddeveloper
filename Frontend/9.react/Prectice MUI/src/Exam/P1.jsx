import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const P1 = () => {
    // https://jsonplaceholder.typicode.com/posts

    const [Data, setData] = useState([])


    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => console.error(error));
    }, [Data]);

    console.log(Data);

    if (Data.length == 0) {
        return <h1>Loding...</h1>
    }

    return (
        <div>
            <div className="flex justify-center bg-pink-800 text-white text-4xl">
                <h1>Posts Title</h1>
            </div>
            {
                Data.map((item) => {
                    return (
                        <div className=" " key={item.id}>
                            <h1>{item.title}</h1>
                        </div>
                    )
                })
            }
            {/* <div className="" >
                <h1>{Data.title}</h1>
            </div> */}
        </div>
    )
}

export default P1
