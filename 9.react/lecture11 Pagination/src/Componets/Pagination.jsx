import React from 'react'
import { useState, useEffect } from 'react';

const Pagination = () => {

    const [proData, setProData] = useState([]);

    const [pageIndex, setPageIndex] = useState(1);

    const perProductData = 6;

    const darshan = Math.ceil(proData.length/perProductData)

    let lastindex = pageIndex * perProductData;

    let firstindex = lastindex - perProductData;

    let productDataList = proData.slice(firstindex, lastindex);

    console.log(productDataList);

   console.log( Array.from(productDataList));
   

    async function API() {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        setProData(data);
    }

    useEffect(() => {
        API();
    }, []);

    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap justify-around">
                {productDataList.map((item) => {
                    return (
                        <div className="max-w-sm m-2 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"  key={item.i}>
                            <a href="#">
                                <img
                                    className="rounded-t-lg h-32 mx-auto"
                                    src={item.image}
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {item.title}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center">
                <button
                    className="btn"
                    onClick={() => setPageIndex((prev) => prev - 1)}
                    disabled={firstindex <= 0}
                >
                    Prev
                </button>
                {/* <span className="btn">{pageIndex}</span> */}
                {
                    Array(darshan).fill(null).map((item,index)=> <div className='btn'>{index+1}</div>)
                }
                <button
                    className="btn"
                    onClick={() => setPageIndex((next) => next + 1)}
                    disabled={lastindex >= proData.length}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Pagination
