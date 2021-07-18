import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, history) => async(dispatch) => {
    try {
        //login user
        history.push('/');
    } catch (error) {
        console.log("Sign in ERROR",error)
    }
}

export const signup = (formData, history) => async(dispatch) => {
    try {
        //signup user
        history.push('/');
    } catch (error) {
        console.log("Sign up ERROR",error)
    }
}