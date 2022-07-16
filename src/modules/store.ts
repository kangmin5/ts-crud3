import { AnyAction, CombinedState,  combineReducers,  configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'
import usersReducer  from "modules/slices/userSlice";
import { rootSaga } from "modules";


const isDev = process.env.NODE_ENV === 'development'
const sagaMiddleware = createSagaMiddleware()

const combinedReducer = combineReducers({
    users: usersReducer,
})
const rootReducer =(
    state: ReturnType<typeof combinedReducer>,
    action: AnyAction
) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        }
    } else {
    return combinedReducer(state, action)
    }
}
const makestore = () => {
    const store = configureStore({
        reducer: { rootReducer },
        middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
        //직렬화 문제 발생 시 {serializableCheck: false} 파라미터로 전달
            .prepend(sagaMiddleware)
            .concat(logger),
        devTools :isDev
    });
    sagaMiddleware.run(rootSaga)
    return store
}

const store = rootReducer;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper(makestore, {debug: isDev}) 
export default store;