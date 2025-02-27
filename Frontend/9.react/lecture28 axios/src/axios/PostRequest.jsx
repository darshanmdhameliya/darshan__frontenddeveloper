import axios from "axios";
import React, { useState } from "react";

const PostRequest = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let response = axios.post("http://localhost:3000/profile", {
        name, email,  phone
      });
      console.log("data",response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="border rounded-2xl border-black" onChange={(e) => setname(e.target.value)} />
        <input type="email" className="border rounded-2xl border-black" onChange={(e) => setemail(e.target.value)} />
        <input type="tel" className="border rounded-2xl border-black" onChange={(e) => setphone(parseInt(e.target.value))} />
        <button type="submit" className='btn'>submit</button>
      </form>
    </div>
  );
};

export default PostRequest;
