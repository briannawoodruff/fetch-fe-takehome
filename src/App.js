import './App.css';
import React, { useState } from 'react'
import SignUp from './components/SignUp'
import FailedAlert from './components/Alert'

function App() {
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  
  return (
    <div className="App flex items-center justify-center h-screen mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
      {alert && <FailedAlert className="justify-self-center" setAlert={setAlert} success={success} />}
      <div className="mx-auto max-w-3xl">
        <SignUp setAlert={setAlert} setSuccess={setSuccess} />
      </div>
    </div>
  );
}

export default App;
