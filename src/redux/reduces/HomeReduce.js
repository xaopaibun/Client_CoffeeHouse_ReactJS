const initialState = {
    cart: [],
    _idLoai: 'L03',
    keyMenu: "Trang Chủ"
};

export default function HomeReduce(state = initialState, action) {
    switch (action.type) {
        case 'ALLSANPHAM':
            return { ...state, dulieu: action.data }

        case 'ChiTietCoffee':
            return { ...state, ItemCoffee: action.data }

        case 'addcart':
            //console.log( state.cart.indexOf(val => val._id === action.item._id))
            return { ...state, cart: [...state.cart, action.item] }

        case 'SumMoneyCart':
            let SumMoneyCart1Item = parseInt(state.cart[0].gia) * parseInt(state.cart[0].soluong);
            let SumMoneyCartHon2Item = state.cart.reduce((accumulator, currentValue) => {
                return parseInt(accumulator) + (currentValue.gia * parseInt(currentValue.soluong))
            }, 0);
            return { ...state, SumMoney: state.cart.length > 1 ? SumMoneyCartHon2Item : state.cart.length == 1 ? SumMoneyCart1Item : 0 }

        case 'RemoveCart':
            return { ...state, cart: state.cart.filter((item) => item._id != action._id) }

        case 'Token':
            return { ...state, refreshToken: action.res.refreshToken, dataUser: action.res.result }

        case "Logout":
            return { ...state, refreshToken: null, dataUser: null }

        case "IDLOAI":
            return { ...state, _idLoai: action._idLoai }

        case "ActiveMenu":
            return { ...state, keyMenu: action.keyMenu }

        case "ResetCart":
            return { ...state, cart: [] }

        default:
            return state;
    }
}