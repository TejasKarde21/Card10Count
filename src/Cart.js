import React,{useState} from "react";

export default function Cart({img,Pname}){
     
    const [count, setCount] = useState(0);

    function increment(){
     setCount(count + 1);
    }

    function decriment(){
        if(count > 0){
    setCount(count - 1);
        }
    }

    const dis = {
        display : "none",
    }

    function display(){
        if(count === 10 ){
            return dis;
        }
    }

   
   return(<>
      
       <div className="w-screen h-screen justify-center items-center flex">
        <div className="border-2 p-8 shadow-2xl shadow-red-400 rounded-md hover:bg-slate-100 hover:shadow-green-400" style={display()} >
            <img src={img} className="w-36" alt="imgeas"/>
            <h1 className="text-center text-2xl font-bold">{Pname}</h1>
            <h1 className="text-center text-2xl font-semibold text-gray-500">{count}</h1>
            <div className="flex justify-around">
                 <button className="bg-red-500 p-4 rounded-full px-6 hover:bg-red-800 text-xl text-white font-extrabold " onClick={increment}> + </button>
                 <button className="bg-green-500 p-4 rounded-full px-7 text-white font-extrabold hover:bg-green-950 text-xl" onClick={decriment}> - </button>
            </div>
        </div>
       </div>

    </>)
}
