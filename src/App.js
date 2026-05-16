import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');

    function handleChange(event) {
        setEmail(event.target.value);
    }
        let result = '';
        if (email.length <= 5) {
            result = "Mega krótkie";
        } else if (email.length > 5 && email.length < 10){
            result = "JestgGit";
        } else{
            result = "Mega długie";
        }
  return (
    <div>
        <h1>System do zapisów na zajęcia</h1>
        <h2>Twój e-mail to {email}</h2>
        {email.length > 0 && <div>{result}</div>}
        <input type="text" value={email} onChange={handleChange}/>
    </div>
  );
}

export default App;
