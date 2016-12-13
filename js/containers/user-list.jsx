import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUser,sendMessage} from '../actions';
import socket from '../store';

class UserList extends Component{

    createListItems(){
        return this.props.users.map((user)=>{
            return (
                <li key={user.id} className="box">
                    <h3>{user.username}</h3>
                    <textarea defaultValue={"Hello World!!!"} ref="myMessage"></textarea>
                    <button onClick={()=>{
                        this.props.sendMessage(user.username,this.refs.myMessage.value);
                        socket.store.dispatch({type:'server/update', data:{
                            username: user.username,
                            content: this.refs.myMessage.value
                        }});
                    }}>Send Message</button>
                </li>
            );
        });
    }

    render(){
        return (
            <div className="left col-sm-6">
                <input type="text" ref="myInput"/>
                <button onClick={()=>{this.props.addUser(this.refs.myInput.value);}}>Add User</button>
                <button onClick={()=>{socket.socket.disconnect();}}>Disconnect</button>
                <ul className="users">
                    {this.createListItems()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        users: state.users
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        addUser: addUser,
        sendMessage: sendMessage
    },dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(UserList);