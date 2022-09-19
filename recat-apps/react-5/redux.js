const redux = require('redux');
const {createStore} = redux
const INCREMENT = 'INCREMENT_COUNTER';
const DECREMENT = 'DECREMENT_COUNTER';


{
    type: DECREMENT
}


const initialState={
    count :0
}
const reducerFun =(state= initialState,action)=>{

    switch(action.type){
    case 'INCREMENT_COUNTER':{
        return{
            ...state,count:state.count+1
        }
        
    }
    case 'DECREMENT_COUNTER':{
        return{
            ...state,count:state.count-1
        }
        
    }
    default:{
        return state
    }
} 
}

const store = createStore(reducerFun )
console.log(store.getState())
store.subscribe(()=>{console.log("ea.fdkyfgawdgiwa7fdlalgsdliyafgdlliyflifg",store.getState())})
store.dispatch({
    type: INCREMENT
})