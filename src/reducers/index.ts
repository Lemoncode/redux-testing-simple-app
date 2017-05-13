import { combineReducers } from 'redux';
import { sessionReducer, SessionState } from './session';
import { routerReducer } from 'react-router-redux'
import { studentReducer, StudentState } from './student'

export interface IState {
  sessionReducer : SessionState;
  routing: any;
  studentReducer : StudentState;  
}

export const reducers =  combineReducers<IState>({
  sessionReducer,
  routing: routerReducer,
  studentReducer
});
