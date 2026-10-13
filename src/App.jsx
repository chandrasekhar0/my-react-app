import { useRef, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";
import { useEffect } from "react";
import Child from "./child";
import UseRefComp from "./useRef";
import ProductsPage from "./useMemo";
import Add from "./add";
import Details from "./details";
function App() {  
  const [items,setItems] = useState([
    {class:"fruit",name:"orange",id:1},
    {class:"vegetable",name:"tomato",id:2}
  ])
  const [fruits,setFruits] = useState([])
  const [vege,setVege] = useState([])
  function addItem(input){
    if(input.class === 'fruit'){
      setFruits((prev)=>[...prev,input])
    } else {
       setVege((prev)=>[...prev,input])
    }
  }
  return (
    <>
      {
        items.map((item)=>{
          return <div className="card" key={item.id}>
            <p className="name">{item.name}</p>
            <button className="action"  onClick={()=>{
              addItem(item)
            }}>ADD</button>
            </div>
        })
      }
      <Child fruitsObject={fruits}/>
    </>
  );
}

export default App;
