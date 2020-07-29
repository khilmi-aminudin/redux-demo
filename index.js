const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger() 

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICRECREAM = 'BUY_ICECREAM'

function buyCake(){
    return {
        type : BUY_CAKE
    } 
}

function buyIceCream(){
    return{
        type : BUY_ICRECREAM
    }
}

// const initialState = {
//     numOfCakes : 10,
//     numOfIceCreams : 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams : 20
}

// const reducer = (state = initialState,action) => {
//     switch(action.type){
//         case BUY_CAKE : return {
//             ...state,
//             numOfCakes : state.numOfCakes - 1
//         }
//         case BUY_ICRECREAM : return {
//             ...state,
//             numOfIceCreams : state.numOfIceCreams - 1
//         }

//         default : return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        }

        default : return state
    }
}

const IceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICRECREAM : return {
            ...state,
            numOfIceCreams : state.numOfIceCreams - 1
        }

        default : return state
    }
}

const rootReducers = combineReducers({
    cake : cakeReducer,
    iceCream : IceCreamReducer
})

const store = createStore(rootReducers, applyMiddleware(logger))
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()