import { MESSAGE_FAILED, MESSAGE_SUCCESS} from './Constants';
const intialState = {
  message: "",
  isLogin : false,
  data : []
};
export const RegisterReducer = (state = intialState, action) => {
  state = intialState;
  const { type, message, error,isLogin,data } = action;
  switch (type) {
    case MESSAGE_SUCCESS:
      state = intialState;
      return {
        ...state,
        // message: [...state.message, message],
        message: message,
        isLogin : isLogin,
        data : data

      }
    case MESSAGE_FAILED:
      return {
        ...state,
        message: error
      }
    default: return state;
  }
}

