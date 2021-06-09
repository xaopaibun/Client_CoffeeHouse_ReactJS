const initialState = {
 
 };
 
 export default function AdminReduce(state = initialState, action) {
     switch (action.type) {
         case 'TOKEN' : 
         console.log('token', action.Token)
         return {...state, Token : action.Token}
         default:
             return state;
     }
 }