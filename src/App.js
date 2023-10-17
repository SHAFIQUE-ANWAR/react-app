// import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import About from './components/About'
import Alert from './components/Alert'

import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";




function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showalert=(message,type)=>{
setalert({
  msg:message,
  type:type
})
  }
  const togglemode=()=>{
    if (mode==='light') {
      setmode('dark')
      document.body.style.backgroundColor='#042743';
      showalert("dark mode has been enable", "success")
    } else {
      setmode('light')
      document.body.style.backgroundColor='white';
      showalert("light mode has been enable", "success")
    }
  }
  return (
    <> 
    <Navbar title="TextUtils" about="about" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    <TextForm heading="Enter the text to analyze below" mode={mode} />
    {/* <Router>
<Navbar title="TextUtils" about="about" mode={mode} togglemode={togglemode} />
 <Alert alert={alert}/>
<div className="container my-4" >
    <Routes>
     <Route path="/about" element={<About />} >
           
          </Route>
          <Route path="/home" element={<TextForm heading="Enter the text to analyze below" mode={mode} />}>
            
          </Route>
    </Routes>
</div>
</Router> */}
    </> 
  );
}

export default App;
