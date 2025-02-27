import React, { useState, useEffect } from "react";
import axios from "axios";

const GetRequest = () => {
  const [data, setdata] = useState([]);
  console.log(data);

  const handleData = () => {
    let response = axios
      .get("http://localhost:3000/profile")
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <ul key={item.id}>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.phone}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default GetRequest;
