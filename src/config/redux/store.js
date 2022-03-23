const { createStore } = require("redux");

const initialState = {
    dataBlog: [],
    name: 'Handy Kharisma'
}

const reducer = (function(state = initialState, action){
    return state;
})

const store = createStore(reducer);

export default store;