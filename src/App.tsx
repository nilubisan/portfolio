import {useEffect, useState} from 'react'
import { initializeApp } from "firebase/app";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyDdDForfHHAz5mY0nvuKP6YWfCgmtcj37U",
            authDomain: "fir-sample-898fd.firebaseapp.com",
            projectId: "fir-sample-898fd",
            storageBucket: "fir-sample-898fd.appspot.com",
            messagingSenderId: "343313224769",
            appId: "1:343313224769:web:a0f794e57b44073be7e2c0"
        };
        initializeApp(firebaseConfig);
    }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
