import React,{useReducer} from 'react'
const initialState=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment ':
            return state+1
            case 'decrement ':
                return state-1
                case 'reset':
                    return initialState
                    default: 
                    return state
    }
}

function Counterone() {
 const [count,countdispatch]=useReducer(reducer,initialState);
   
  return (
    <div>
        Count: {count}
      <button onClick={()=>countdispatch('increment')}>Increment </button>
      <button onClick={()=>countdispatch('decrement')}>decrement </button>
      <button onClick={()=>countdispatch('reset')}>Reset </button>
    </div>
  )
}

export default Counterone
