import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Card = () => {

    const data = useLoaderData();

    return (
        <div>
            <h1>This is Card Page</h1>
            <ul>
                {
                    data.map((item) => {
                        return (
                            <li>
                                <Link className="underline" to="/AboutUs">{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export const CardLoader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

export default Card
