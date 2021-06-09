const initialState = {
   cart: [],
   _idLoai : 'L03',
   keyMenu :"Trang Chủ"
};

export default function HomeReduce(state = initialState, action) {
    switch (action.type) {
        case 'ALLSANPHAM':
            return {...state, dulieu : action.data}

        case 'ChiTietCoffee':
            return {...state, ItemCoffee : action.data}

        case 'addcart':
            console.log( state.cart.indexOf(val => val._id === action.item._id))
            return {...state, cart : [...state.cart,action.item ]}

        case 'SumMoneyCart':
            console.log(state.cart.length > 2 ? state.cart.reduce((acc, curr) => acc + curr.gia ) :'')
            //SumMoneyCart :state.cart.reduce((acc, curr) => acc + curr.gia )
            return {...state}

        case 'RemoveCart':
           return {...state, cart : state.cart.filter((item) => item._id != action._id)}

        case 'Token' :
            return {...state, refreshToken: action.res.refreshToken, dataUser : action.res.result}

        case "Logout":
            return {...state, refreshToken: null, dataUser : null}

        case "IDLOAI":
            return {...state, _idLoai: action._idLoai}

        case "ActiveMenu":
            return {...state, keyMenu : action.keyMenu}

        case "ResetCart":
            return {...state, cart :[]}
            
        default:
            return state;
    }
}