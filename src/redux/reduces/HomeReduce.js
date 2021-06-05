const initialState = {
   cart: []
};

export default function HomeReduce(state = initialState, action) {
    switch (action.type) {
        case 'ALLSANPHAM':
            return {...state, dulieu : action.data}
        case 'ChiTietCoffee':
            return {...state, ItemCoffee : action.data}
        case 'addcart':
            
            return {...state, cart : [...state.cart,action.item ]}
        case 'Token' :
            // console.log(action.res.refreshToken);
            // console.log(action.res.result);
            return {...state, refreshToken: action.res.refreshToken, dataUser : action.res.result}
        case "Logout":
            return {...state, refreshToken: null, dataUser : null}
        default:
            return state;
    }
}