import Cart from "./Cart";

function App() {
  return (
 <>
  <h1 className="text-center text-3xl w-full mt-20">Products</h1>
 <div className="flex -mt-28">

    <Cart img="https://t3.ftcdn.net/jpg/02/18/53/26/360_F_218532663_Meqbe06Mqr4X7DV3vfM4usMkfML47thJ.jpg" Pname="Tea"/>
    <Cart img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIdjE84VISDaJ5NBPyEM7cskc4FsB-qELLG4AVqqV-&s" Pname="Coffee" />
    <Cart img="https://media.istockphoto.com/id/155376375/photo/fruit-juice.jpg?s=612x612&w=0&k=20&c=DHpot0a67oN-8lSW0CMI7Y4vLM-TlMBBqA7c5kCfrNo=" Pname="Juice"/>
    </div>
 </>
  );
}

export default App;
