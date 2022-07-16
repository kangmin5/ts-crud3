import axios, { AxiosResponse } from "axios";
import {User} from '../types'
const SERVER = 'http://localhost:4000'
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}

export const fetchUsers = async () => {
    try {
        const response: AxiosResponse =
            await axios.get<User[]>(`${SERVER}/userdata`)
        return response;
    } catch (err) {
        return err;
    }
}

export const addUserApi = async (
    payload: {
        id:string,name:string, mobile:string, email: string,}
) => {
        try{
            // console.log(typeof ( payload ))
            console.log('>>>>>>>>>>addUserApi:', payload)
            const response : AxiosResponse<any, User> =
            await axios.post(`${SERVER}/userdata`, payload, { headers })
            if(response.data.message == "SUCCESS") { alert('사용자추가 성공') }
            return response.data
        }catch(err){
            return err;
        }
    
    
    }