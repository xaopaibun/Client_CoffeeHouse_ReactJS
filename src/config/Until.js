export const HandleNumTime = (num) =>{
    let result = "";
    if(num > 0 && num < 10){
        result = "0" + num.toString();
    }
    else{
        result =  num.toString();
    }
    return  result;
}
export const HandleTime = (epoch) =>{
    let d = new Date(parseInt(epoch));
    let doneTime = d.getFullYear() + "-" + HandleNumTime(d.getMonth() + 1)+ "-" + HandleNumTime(d.getDate()) +  " " + HandleNumTime(d.getHours()) + "h:" +HandleNumTime(d.getMinutes()) + "p:" + HandleNumTime(d.getSeconds());
    return doneTime;
}
// export const Token = () => {
//     const token = useSelector(store => store.AdminReduces.token);
//     return(

//     );
// }