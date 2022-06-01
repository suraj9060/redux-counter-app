import './App.css';
import { useSelector, useDispatch } from "react-redux"
import {incNumber , decNumber} from "./actions/Actions"
import Counter from './Components/Counter';

function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter App Using Redux</h1>
      <h1 style={{ backgroundColor: "green" }}>{myState}</h1>
      <button
        style={{
          fontSize: 20,
          color: "red",
          margin: 20,
          padding: 20,
          backgroundColor: "teal",
        }}
        onClick={() => dispatch(incNumber(5))}
      >
        +
      </button>
      <button
        style={{
          fontSize: 20,
          color: "red",
          margin: 20,
          padding: 20,
          backgroundColor: "yellow",
        }}
        onClick={() => dispatch(decNumber(3))}
      >
        -
      </button>
      <div>
        <h3>step 1 : created action file and made function of action , here incment and decrement</h3>
        <h4> step 2 : made reducers folder and 2 file incdec.jsx and reducer.jsx in incdec.jsx defined initialstate madefunction with 2 paramete initial action and  Action after that switch case of action and reture state + action.payload ////  after that in second file reducer.jsx imported from changeTheNumberfunction and imported combineReducer form redux and inside that definde our function changeTheNumber and exported that and stored combineReducer in rootReducer and exported</h4>
      
        <h3>Step 3 : import rootreducer from reducers.jsx and import creteStore from redux and incide createStore we have define rootReducer and stored it in const store and exported; </h3>
        <h2>Step 4 : in index.js import Provider from react-redux and store and after that wraped app component with provider and pass store as a prop</h2>
         <h3>Step 5 : imported useSlector and useDispatch from react-redux and imported function from action in app inside useSlector define reducer function ChangeTheCount and inside button useDispatch and inside we have written our action what to do</h3>
      </div>
    </div>
  );
}

export default App;
