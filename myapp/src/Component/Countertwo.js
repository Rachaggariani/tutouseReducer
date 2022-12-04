import React,{useReducer} from 'react'
const initialState={
    firstcount:0
};
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment ':
            return {firstcount: state.firstcount + action.value}
            case 'decrement ':
                return {firstcount: state.firstcount -action.value}
                case 'reset':
                    return initialState
                    default: 
                    return state
    }
}

function Countertwo() {
    const [count,countdispatch]=useReducer(reducer,initialState);
  return (
    <div>
    Count-{count.firstcount}
  <button onClick={()=>countdispatch({type:'increment',value:1})}>Increment </button>
  <button onClick={()=>countdispatch({type:'decrement',value:1})}>decrement </button>
  <button onClick={()=>countdispatch({type:'reset'})}>Reset </button>
</div>
  )
}

export default Countertwo
