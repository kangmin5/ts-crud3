import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "modules/types";

export interface UserState {
    data: User[],
    status: 'idle' | 'loading' | 'succeeded' |'failed'
}
const initialState: UserState = {
    data: [],
    status: 'idle'
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUsersRequest(state: UserState) {
            console.log(`>>>>>>>>>> fetchUsersRequest  ${JSON.stringify(state)} `)
            state.status = 'loading';
        },
        fetchUsersSuccess(state: UserState, { payload }) {
            console.log(`>>>>>>>>>> fetchUsersSuccess ${JSON.stringify(state)} `)
            state.status = 'idle'
            state.data = [...state.data, payload]
            console.log(`서버 payload: ${JSON.stringify(state.data)}`)
        },
        fetchUsersFailure(state: UserState, { payload }) {
            console.log(`진행 2 : fetchUsersFailure ${JSON.stringify(state)} `)
            state.status = 'failed'
            state.data = payload
        },

        addUserRequest(state: UserState, { payload }) {
            console.log(`>>>>>>>>>> addUserRequest:`)
            state.status = 'loading';
        },
        addUserSuccess(state: UserState, { payload }) {
            state.status = 'idle'
            state.data = [...state.data, payload]
            console.log(`>>>>>>>>>> addUserSuccess :  ${JSON.stringify( state.data )}`)
        },
        addUserFailure(state: UserState, { payload }) {
            alert(`addUser 실패`)
            state.status = 'failed'
        }
        // addUserRequest:(state:UserState, action: PayloadAction<User>) => {
        //     console.log(`>>>>>>>>>> addUserRequest:`)
        //     state.status = 'loading';
        // },
        // addUserSuccess: (state:UserState, action: PayloadAction<User>) => {
        //     state.status = 'idle'
        //     state.data = [...state.data, action.payload]
        //     console.log(`>>>>>>>>>> addUserSuccess :  ${JSON.stringify( state.data )}`)
        // },
        // addUserFailure: (state, {payload: payload}) => {
        //     alert(`addUser 실패`)
        //     state.status = 'failed'
            // state.data = payload
            
        //,
    }
})
const { reducer, actions } = userSlice;
export const userActions = actions;
export const {
    fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure,
    addUserRequest, addUserSuccess, addUserFailure
} = userSlice.actions;
export default reducer;