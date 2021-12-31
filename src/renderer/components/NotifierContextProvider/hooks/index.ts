import { useReducer, Reducer } from 'react';

type State = {
  isShow: boolean;
  message: string;
};

export type Action = {
  type: 'NOTIFIER/SET_ISSHOW',
  isShow: boolean, 
} | {
  type: 'NOTIFIER/SET_MESSAGE',
  message: string,
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'NOTIFIER/SET_ISSHOW': {
      return { message: state.message, isShow: action.isShow };
    }

    case 'NOTIFIER/SET_MESSAGE': {
      return { message: action.message, isShow: state.isShow };
    }

    default:
      return state;
  }
};

export const useNotification = () => useReducer(reducer, { isShow: false, message: '' });
