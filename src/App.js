import "bulma/css/bulma.css";
import { useReducer, useState } from "react";

const CounterDisplay = (props) => {
  return(
    <div className = "column is-half has-text-centered">
      <h1 className="title">{props.currentCounter}</h1>
    </div>
  );
};

function App() {

  //const[counter, setCounter] = useState(0);

  const myReducer = (state, action) => {
    if(isNaN(action.value))return 0;
    return (action.value > 100) ? 100: action.value < 0 ? 0 : action.value;
  }

  const[counter, dispatch] = useReducer(myReducer, 0);

  const decrement = () => {
    dispatch({value: counter-1});
  }

  const[inputValue, setInputValue] = useState("");

  const handleKeyDown = (e)=>{
    if(e.Key == "Enter"){
      dispatch({value: parseInt(inputValue)});
    }
  }

  return(
    <div className = "App">
      <div className = "container">
        <div className = "columns is-multiline">
          <div className = "column is-full">
            <div className = "notification">
              <div className = "columns">
                <div className = "column is-half">
                  <div class="field has-addons">
                    <div class="control">
                      <input className="input" 
                      type="text" 
                      placeholder="Put a number"
                      value={inputValue}
                      onChange={(e)=>setInputValue(e.target.value)}
                      onKeyDown = {handleKeyDown}
                      />
                    </div>
                    <div class="control">
                      <a class="button is-info"
                      onClick = {()=> dispatch({value: parseInt(inputValue)})}
                      >
                        Assign
                      </a>
                    </div>
                  </div>
                  <div class="buttons has-addons">
                    <button class="button is-primary"
                    onClick = {()=>dispatch({value:counter+1})}
                    >
                      Up
                    </button>
                    <button class="button is-warning"
                    onClick = {()=>dispatch({value:counter-1})}
                    >
                    Down
                    </button>
                  </div>
                
                </div>
                <CounterDisplay currentCounter = {counter} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
