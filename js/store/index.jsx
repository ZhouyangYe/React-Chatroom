import { createStore,applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import allReducers from '../reducers';

let socket = io();
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/update");

let store = applyMiddleware(socketIoMiddleware)(createStore)(allReducers);

export default {io:io,store:store,socket:socket};