
import React, { useState ,useEffect} from "react";
import './../styles/App.css';

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [search, setSearch]=useState('');
  const [display,setDisplay]=useState([...fruits]);

  useEffect(()=>{
    if(search.length>0){
      let filteredData=fruits.filter((item)=>item.includes(search));
      // console.log(filteredData);
      setDisplay(filteredData);
    }else{
      setDisplay([...fruits]);
    }
  },[search])
  
  return (
    <div>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <ul>
          {
            display.map(((item,idx)=>(
              <li key={idx}>{item}</li>
            )))
          }
        </ul>
    </div>
  )
}

export default App
