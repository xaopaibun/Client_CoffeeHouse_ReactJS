
import ls from "local-storage";

// export const Token = ls.get(Token);







export const Url_Image = "http://localhost:5000/images/";
export const Url_Locahost = "http://localhost:5000";

export const HandleNumTime = (num) => {
    let result = "";
    if (num > 0 && num < 10) {
        result = "0" + num.toString();
    }
    else {
        result = num.toString();
    }
    return result;
}


const  removeAscent = (str) => {
    if (str === null || str === undefined) return str;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
}

export const isValidName = (string) => {
    var re = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g // regex here
    return re.test(removeAscent(string))
}

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export const validatePhone = (phone) => {
    const re = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    return re.test(phone);
}


export const FormatNumber = (number) => Intl.NumberFormat().format(parseInt(number));

export const HandleTime = (epoch) => {
    let d = new Date(parseInt(epoch));
    let doneTime = d.getFullYear() + "-" + HandleNumTime(d.getMonth() + 1) + "-" + HandleNumTime(d.getDate()) + " " + HandleNumTime(d.getHours()) + "h:" + HandleNumTime(d.getMinutes()) + "p:" + HandleNumTime(d.getSeconds());
    return doneTime;
}
// export const Token = () => {
//     const token = useSelector(store => store.AdminReduces.token);
//     return token;
// }