// import React, { useEffect, useState } from 'react'

// const Counter = () => {

//     const [time, setTime] = useState(0)

//     const [isRun, setIsRun] = useState(false)

//     useEffect(() => {
//         if (isRun && time > 0) {
//             let timeid = setInterval(() => {
//                 setTime((prev) => prev - 1)
//             }, 1000)
//             return () => clearInterval(timeid)
//         }
//         else if (time === 0) {
//             setIsRun(false)
//         }
//     }, [time, isRun])

//     return (
//         <div>
//             <input type="number" placeholder='setTime in Second' className='border-black border-2 ml-10 p-3' onChange={(e) => setTime(parseInt(e.target.value))} disabled={isRun} />
//             <button className='btn' onClick={() => setIsRun(true)} disabled={isRun}>Start</button>
//             <button className='btn' onClick={() => setIsRun(false)}>Pause</button>
//             <button className='btn' onClick={() => setTime(0)}>Reset</button>
//             <h2 className='ml-10 bg-pink-200 block w-fit p-3'>{time > 0 ? `${time} Remaining` : 'Time Up'}</h2>
//         </div>
//     )
// }

// export default Counter


// import React, { useEffect, useState } from 'react';

// const Counter = () => {
//     const [time, setTime] = useState(0);
//     const [isRun, setIsRun] = useState(false);

//     const [color, setcolor] = useState()



//     useEffect(() => {
//         if (isRun && time > 0) {
//             let timeid = setInterval(() => {
//                 setTime((prev) => prev - 1);
//             }, 1000);
//             return () => clearInterval(timeid);
//         } else if (time === 0) {
//             setIsRun(false);
//         }
//     }, [time, isRun]);


//     const bgcolor = () => {
//         setIsRun(false)
//         setcolor('bg-red-400')
//     }

//     return (
//         <div
//             className={`h-screen  flex flex-col items-center justify-center ${color} ${isRun ? 'bg-black' : 'bg-white'
//                 }`}
//         >
//             <input
//                 type="number"
//                 placeholder="Set Time in Seconds"
//                 className="border-black border-2 p-3 mb-5 rounded-lg"
//                 onChange={(e) => setTime(parseInt(e.target.value))}
//                 disabled={isRun}
//             />
//             <div className="flex gap-3">
//                 <button className="btn bg-blue-500 text-white p-2  rounded-lg" onClick={() => setIsRun(true)} >
//                     Start
//                 </button>
//                 <button className={`btn bg-red-500 text-white p-2 rounded-lg `} onClick={bgcolor}>
//                     Pause
//                 </button>
//                 <button className="btn bg-yellow-500 text-white p-2 rounded-lg" onClick={() => setTime(0)}>
//                     Reset
//                 </button>
//             </div>
//             <h2 className="mt-5 bg-pink-200 block w-fit p-3">
//                 {time > 0 ? `${time} Remaining` : 'Time Up'}
//             </h2>
//         </div>
//     );
// };

// export default Counter;

// import React, { useEffect, useState } from 'react';

// const Counter = () => {
//     const [time, setTime] = useState(0); // Time in seconds
//     const [isRun, setIsRun] = useState(false);

//     useEffect(() => {
//         if (isRun && time > 0) {
//             let timeid = setInterval(() => {
//                 setTime((prev) => prev - 1);
//             }, 1000);
//             return () => clearInterval(timeid);
//         } else if (time === 0) {
//             setIsRun(false);
//         }
//     }, [time, isRun]);

//     const formatTime = () => {
//         const minutes = Math.floor(time / 60).toString().padStart(2,0);
//         const seconds =( time % 60).toString().padStart(2,0);
//         return `${minutes}m ${seconds}s`;
//     };

//     return (
//         <div
//             className={`h-screen flex flex-col items-center justify-center ${isRun ? 'bg-black' : 'bg-white'
//                 }`}
//         >
//             <div className="flex gap-3 mb-5">
//                 <input
//                     type="number"
//                     placeholder="Minutes"
//                     className="border-black border-2 p-3 rounded-lg"
//                     onChange={(e) => { setTime(parseInt(e.target.value)) }}
//                     disabled={isRun}
//                 />
//             </div>
//             <div className="flex gap-3">
//                 <button
//                     className="btn bg-blue-500 text-white p-2 rounded-lg"
//                     onClick={() => setIsRun(true)}
//                     disabled={isRun}
//                 >
//                     Start
//                 </button>
//                 <button
//                     className="btn bg-yellow-500 text-white p-2 rounded-lg"
//                     onClick={() => setIsRun(false)}
//                 >
//                     Pause
//                 </button>
//                 <button
//                     className="btn bg-red-500 text-white p-2 rounded-lg"
//                     onClick={() => {
//                         setIsRun(false);
//                         setTime(0);
//                     }}
//                 >
//                     Reset
//                 </button>
//             </div>
//             <h2 className="mt-5 bg-pink-200 block w-fit p-3 text-lg text-center text-black rounded-lg">
//                 {time > 0 ? `${formatTime()} Remaining` : 'Time Up'}
//             </h2>
//         </div>
//     );
// };

// export default Counter;


import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [time, setTime] = useState(0);
    const [isRun, setIsRun] = useState(false);

    const [bgcolor, setbgcolor] = useState('')

    useEffect(() => {
        if (isRun && time > 0) {
            setbgcolor('bg-black')
            let timeid = setInterval(() => {
                setTime((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timeid);
        }
        else if (time == 0) {
            setIsRun(false);
            setbgcolor('bg-white')

        }
        else if (time == time) {
            setIsRun(false)
            setbgcolor('bg-stone-500')

        }

    }, [time, isRun]);

    const formatTime = () => {
        const hours = Math.floor(time / 3600).toString().padStart(2, '0'); // Hours
        const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0'); // Minutes
        const seconds = (time % 60).toString().padStart(2, '0'); // Seconds
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className={`h-screen  flex flex-col items-center justify-center ${bgcolor}`}>
            <div className="flex gap-3 mb-5">
                <input
                    type="number"
                    placeholder="second"
                    className="border-black border-2 p-3 rounded-lg"
                    onChange={(e) => { setTime(parseInt(e.target.value)) }}
                />

            </div>
            <div className="flex gap-3">
                <button
                    className="btn bg-blue-500 text-white p-2 rounded-lg"
                    onClick={() => setIsRun(true)}
                >
                    Start
                </button>
                <button
                    className="btn bg-yellow-500 text-white p-2 rounded-lg"
                    onClick={() => setIsRun(false)}
                >
                    Pause
                </button>
                <button
                    className="btn bg-red-500 text-white p-2 rounded-lg"
                    onClick={() => {
                        setIsRun(false);
                        setTime(0);
                    }}
                >
                    Reset
                </button>
            </div>
            <h2 className="mt-5 bg-pink-200 block w-fit p-3 text-lg text-center text-black rounded-lg">
                {time > 0 ? `${formatTime()} Remaining` : 'Time Up'}
            </h2>
        </div>
    );
};

export default Counter;
