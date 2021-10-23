/*import { LOGIN_REQUEST,SUCCESS,FAILURE } from "./authTypes";
export const authenticateUser = (email , password) => {
    return dispatch => {
        dispatch(loginRequest());
        if(email === "190101120062@cutm.ac.in"&& password ==="cutm12345"){
            dispatch(success());
        }else{
            dispatch(failure());
        }
    }
}


const loginRequest = () =>{
    return{
        type:LOGIN_REQUEST
    };
};

const success = () =>{
    return{
        type:SUCCESS,
        payload : true
    };
};

const failure = () =>{
    return{
        type:FAILURE,
        payload: false
    };
};*/