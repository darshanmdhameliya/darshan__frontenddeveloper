import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
    const [Data, setData] = useState([]);
    const [index, setIndex] = useState(0);

    const nextCard = () => {
        if (index === Data.length - 1) {
            setIndex(0); // Loop back to the first card
        } else {
            setIndex(index + 1);
        }
    };

    const previouscard = () => {
        if (index === 0) {
            setIndex(0); // Loop back to the first card
        } else {
            setIndex(index - 1);
        }
    };

    useEffect(() => {
        axios
            .get('https://dummyapi.online/api/blogposts')
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => console.error(error));
    }, []);

 if (Data.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="m-10 flex justify-between">
                <button className="btn" onClick={previouscard}>
                    Previous
                </button>
                <button className="btn" onClick={nextCard}>
                    Next
                </button>  
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col border max-w-sm bg-cyan-100 rounded-lg shadow">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h1 className='bg-black text-2xl text-white  w-fit p-5 border-yellow-400 border-e-4 border-b-4'>{Data[index].id}</h1>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                            {Data[index].title}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700">
                            {Data[index].content}
                        </p>
                        <div className="flex justify-between">
                            <p className="flex flex-col text-left">
                                Author
                                <span className="text-slate-700">
                                    {Data[index].author}
                                </span>
                            </p>
                            <p className="flex flex-col text-right">
                                Date
                                <span className="text-slate-700">
                                    {Data[index].date_published}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
