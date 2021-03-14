import "./App.css";
import Header from "./Components/Header";
import Wave from "./Components/Wave";
import Trinder from "./Components/Trinder/Trinder";
import Trinfess from "./Components/Trinfess/Trinfess";
import {useState} from "react";

function App() {
  const [pageRed, setpageRed] = useState(true)
  return (
    <div className="App">
      <div className={pageRed ? 'bgRed' : 'bgBlue'}>
        <Header changePage={setpageRed}/>
        <Wave />
        
        {
          pageRed
          ?<Trinder />
          :<Trinfess />
        }
        
      </div>
    </div>
  );
}

export default App;
