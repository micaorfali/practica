'use client'
import Image from "next/image";
import axios from "axios";
import Card from "@/components/card/Card";
import { useState, useEffect } from "react";
import Ejercicios from "@/components/ejercicios/Ejercicios";

export default function Home() {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
   async function getData(){
    try {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setMyData(data);
      setLoading(false);
    }
    catch(error){
      console.log(error);
    }
   }
   getData();
  }, [])

  return (
    <main>
      {loading ?
        <div>Loading...</div> 
        :
          <div>
            <Ejercicios data={myData}/>
            {myData.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
              />
              ))}
          </div>
        }
    </main>
  );
}
