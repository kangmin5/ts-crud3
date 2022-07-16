import { call, put, takeLatest } from 'redux-saga/effects'
import { AxiosResponse } from 'axios';
import { addUserFailure, addUserRequest, addUserSuccess, userActions } from 'modules/slices/userSlice';
import { addUserApi, fetchUsers } from 'modules/apis/userApi';



export function* fetchUsersSaga(){
    const { fetchUsersSuccess, fetchUsersFailure } = userActions
        try {
            const res:AxiosResponse = yield call(fetchUsers)
            console.log(`fetchUsersSaga : ${JSON.stringify(res.data)}`) 
            yield put(fetchUsersSuccess(res.data))
        } catch (error) {
            yield put(fetchUsersFailure(error))
        }
}

export function* addUserSaga() {
    yield takeLatest(addUserRequest , (user ) => {
        try {
            console.log(' >>>>>>>>>> addUserSaga 성공  '+ JSON.stringify(user))
            const res:any = addUserApi(user.payload)
            put(addUserSuccess(res.payload))
            
        } catch(error){
            put(addUserFailure(error))
        }
    }
    )
}
