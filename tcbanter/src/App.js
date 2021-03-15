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
      
        <div className="footer">
          <p className="footerNote">This website is a parody and has nothing to do with TCD</p>
          {/* <p className="footerNote">This site was built by a Trinity Student for Trinity students</p>
          <p className="footerNote">The site owner doesn't take responsibility for what others write</p> */}
        </div>

      </div>

    </div>
  );
}

export default App;
