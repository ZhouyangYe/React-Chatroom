import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserMessage extends Component{

    createListItems(){
        return this.props.message.map((message)=>{
            return (
                <li key={message.id} className="user">
                    <h4>{message.username}: </h4>
                    <p>{message.content}</p>
                    <hr/>
                </li>
            );
        });
    }

    render(){
        return (
            <div className="right col-sm-6">
                <h1>Chat Log</h1>
                <ul>
                    {this.createListItems()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        message: state.message
    };
}

export default connect(mapStateToProps)(UserMessage);