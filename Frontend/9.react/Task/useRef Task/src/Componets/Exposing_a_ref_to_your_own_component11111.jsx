
import React, { useRef, useState } from 'react';
import Exposing from './Exposing_a_ref_to_your_own_component'

function Exposing_a_ref_to_your_own_component11111() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const inputRef = useRef();

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  return (
    <div className='bg-gray-300 text-center p-6 m-10'>
      <h1 className='bg-slate-400 font-bold m-7 inline-block p-4'>Task Manager</h1><br />
      <div className=" flex justify-center gap-4">
        <Exposing
          ref={inputRef}
          value={taskInput}
          onChange={handleInputChange}
        />
        <button className='bg-green-300 px-4 py-2 rounded-2xl border-2 border-black' onClick={handleAddTask}>Add Task</button>
       
      </div>
      <ul className='  mt-5  '>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
    </div>
  );
}

export default Exposing_a_ref_to_your_own_component11111;