import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    function handleChange(event) {
        setEmail(event.target.value);
    }
  return (
    <div>
        <h1>System do zapisów na zajęcia</h1>
        {!isLoggedIn &&
            <div>
                <p>Zaloguj się się mailem</p>
                <input type="text" onChange={handleChange}/>
                <button onClick={() => setIsLoggedIn(true)}>Zaloguj się</button>
            </div>
        }
        {isLoggedIn &&
            <div>
                <h1>Witaj {email}</h1>
                <br/>
                <a onClick={() => setIsLoggedIn(false)}>Wyloguj</a>
            </div>
        }
    </div>
  );
}

export default App;
