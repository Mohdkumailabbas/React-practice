import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  const productkey = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((response) => {
        console.log(response);
        setData(response.data); // Fixed: response.data instead of productkey.data
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addProduct = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .post(api, {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getuser = () => {
    const api = "https://fakestoreapi.com/users";
    axios
      .get(api)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    getuser();
    console.log("user created");
    return ()=>{
      console.log("user deleted");
    };
  },[]);

  return (
    <>
      <button onClick={() => productkey()}>CALL</button>
      <button onClick={() => addProduct()}>add</button>
      <button onClick={() => getuser()}>user</button>
      {/* <ul>
        {data.length > 0 ? ( // Fixed: using data instead of productkey
          data.map((e) => (
            <li key={e.id}>product</li> // Fixed: added key for each item in the list
          ))
        ) : (
          <li>No products available</li> // Added: handle the case when there are no products
        )}
      </ul> */}
    </>
  );
};

export default App;
