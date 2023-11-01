
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Text_area from './components/text_area'
import Alert from './components/alert';
import About from './components/about';
import React, { useState } from 'react'
function App() {
  const [mode,SetMode]=useState("light");
  const[alert,SetAlert]=useState(null);
  const showAlert=(message,type)=>{
        SetAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          SetAlert(null)
        },1500)
  }
  const toggleMode=()=>{
        if(mode=="light"){
          SetMode("dark");
          document.body.style.backgroundColor= "#0d0d0d ";
          showAlert('mode changed to dark','success')
        }
        else{
          SetMode("light")
          document.body.style.backgroundColor= "white";
          showAlert('mode changed to light','success')
        }
  }
  return (
    // <div className="App">
    <>
      <BrowserRouter>
      
          <Navbar title="Text_Editor" about="About us" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert}/>
        <Routes>
          
          <Route exact path="/text_area" element={<div className=' my-3'>
          <Text_area showAlert={showAlert} heading="Write your text below" mode={mode}/>
          </div>
          }/>
          
          <Route exact path="/about" element={<About mode={mode}/>}/>
      </Routes>
      </BrowserRouter>
      </>
    // </div>
  );
}

export default App;
