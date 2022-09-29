import './App.css';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Alert from './Components/Alert/Alert';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
      <BrowserRouter>
        <Navbar />
<Alert alert={alert}/>
        <Routes>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route
            exact
            path='/'
            element={
              <Form showAlert={showAlert} heading='SimpyText - word counter & useful text utilities' />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
