import "./App.css";
import Header from "./Components/Header";
import Wave from "./Components/Wave";
import Trinder from "./Components/Trinder/Trinder";

function App() {
  return (
    <div className="App">
      <div className="bgColour">
        <Header />
        <Wave />
        <Trinder />
      </div>
    </div>
  );
}

export default App;
