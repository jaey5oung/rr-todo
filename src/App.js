import react, { useState } from "react"


function App() {
  const [good,setGood] = useState("") 

  const onNote =(e)=>{
    setGood(e.target.value)
  }

  const onClick =()=>{
    console.log(good);
    
  }

  return (
    <div className="App">
      <input value={good} type="text" onChange={onNote} />
      <button onClick={onClick}></button>
    </div>
  )
}

export default App
