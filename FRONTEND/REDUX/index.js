import { createStore } from 'redux'

//store
const store = createStore(reducer)

//reducer
function reducer(state = { amount: 1 }, action) {
	return state
}

//global state
console.log(store.getState())
