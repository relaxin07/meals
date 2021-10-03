

const reducer = (state , action) =>{
    switch(action.type) {
        case 'SET_CATEGORIES':
            return {...state ,categories: action.payload };
        case 'addEvent':
            return state;
        default:
            return state;

    }
}

export default reducer;
