const initialState = {
    name: 'Handy'
}

const globalReducer = (function(state = initialState, action){
    if(action.type === 'UPDATE_NAME'){
        return{
            ...state,
            name: 'Kharisma'
        }
    }
    return state;
})

export default globalReducer;