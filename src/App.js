// default template of react file
// 1- imports
import logo from './logo.svg';
import './App.css';
import MyFirst from "./components/MyFirst";
import Counter from "./components/Counter";
import SquareCalculator from "./components/SquareCalculator";
import SumCalculator from "./components/SumCalculator";
import Menu from "./components/Menu";
import UserList from "./components/UserList";

// 2- function
function App() { // function name must be exactly like file name
  // functional component
  // js code
  var x = 100;
  // 3- return html
  return (
    // html code
    <div className="App">
      {/* {x}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit {x} <code>src/App.js</code> and save to reload.
        </p>
        <MyFirst></MyFirst>
        {/* or like this */}
        {/* <MyFirst/> */}
        <br/>
        <br/>
        <br/>
        <br/> 
        {/* <Counter/> */}
        {/* <SquareCalculator/> */}
        {/* <SumCalculator/> */}
        {/* <div className='row d-flex justify-content-center mt-5'>
          <div className='col-sm-6 text-center'>
            <div className='card'>
              <div className='card-body bg-dark  text-white'>
                <div className='d-flex justify-content-between'>
                  {/* something here */}
                {/* </div>
                <div className='row'>
                  <div className='col'>الصنف</div>
                  <div className='col'>اسم الصنف</div>
                  <div className='col'>سعر الصنف</div>
                </div>
                
              </div>
            </div>
          </div>

        <Menu/> */} 
        {/* </div> */}
<UserList/>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

// 4- exports

export default App;
