import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import { input, clear, operator } from './actions';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  function inputNumber (number){
    dispatch(input(number))
  }

  function clearDisplay (){
    dispatch(clear())
  }

  function inputOperator (op){
    dispatch(operator(op))
  }

  console.log(state)

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.display}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.firstNum}</span>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => {inputOperator('+')}} />
              <CalcButton value={"*"} onClick={() => {inputOperator('*')}} />
              <CalcButton value={"-"} onClick={() => {inputOperator('-')}} />
              <CalcButton value={"/"} onClick={() => {inputOperator('/')}} />
            </div>
            
            <div className="row">
              
            </div>

            <div className='flex'>
              <div className='nums'>
                <div className="row">
                  <CalcButton value={1} onClick={() => {inputNumber(1)}} />
                  <CalcButton value={2} onClick={() => {inputNumber(2)}} />
                  <CalcButton value={3} onClick={() => {inputNumber(3)}}/>
                </div>

                <div className="row">
                  <CalcButton value={4} onClick={() => {inputNumber(4)}} />
                  <CalcButton value={5} onClick={() => {inputNumber(5)}} />
                  <CalcButton value={6} onClick={() => {inputNumber(6)}} />
                </div>

                <div className="row">
                  <CalcButton value={7} onClick={() => {inputNumber(7)}} />
                  <CalcButton value={8} onClick={() => {inputNumber(8)}} />
                  <CalcButton value={9} onClick={() => {inputNumber(9)}} />
                </div>

                <div className="row">
                  <CalcButton value='.' onClick={() => {inputNumber('.')}} />
                  <CalcButton value={0}  onClick={() => {inputNumber(0)}}/>
                  <CalcButton value={"CE"} onClick={clearDisplay} />
                </div>
              </div>

              <CalcButton className='equal' value={"="} size={12}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
