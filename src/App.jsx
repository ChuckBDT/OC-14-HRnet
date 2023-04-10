import Logo from "/logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <img src={Logo} alt='Logo' style={{ width: "200px", height: "200px" }} />
      <div className='App'>Hello World</div>
    </>
  );
}

export default App;
