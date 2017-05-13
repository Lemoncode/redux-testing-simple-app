import { createStore, applyMiddleware, compose, Store } from 'redux';
import {reducers, IState} from './reducers'
import reduxThunk from 'redux-thunk';

export const store : Store<IState> = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk),
    window['devToolsExtension'] ? window['devToolsExtension']() : f => f
  )  
) as any;