export default (state = null, action) => { 
    //= null provides an initial states 
    // for the first times it runs
    
   switch (action.type) {
        case 'select_library':
            return action.payload;
        default: 
            return state;
    }
    // console.log(action.type +" "+action.payload);
    // return null;
};
