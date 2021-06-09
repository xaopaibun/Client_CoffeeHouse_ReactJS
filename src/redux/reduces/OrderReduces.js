const initialState = {
 
};

export default function OrderReduces(state = initialState, action) {
    switch (action.type) {
        case 'getorderProducts_iD':
           
            return {...state, orderProducts_iD : action.getorderProducts_iD }
        default:
            return state;
    }
}