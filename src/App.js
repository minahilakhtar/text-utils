
import React, { useState }  from "react";
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [mode, setMode] = useState("light");

  const removeBodyColor= ()=>{
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-dark");
  }
  const toggleMode = (cls) => {
    removeBodyColor()
    document.body.classList.add("bg-"+cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#4b4956';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }

  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Textform showAlert={showAlert} heading="Enter Your Text Below" mode={mode} />
    </>
  );
}

export default App;
