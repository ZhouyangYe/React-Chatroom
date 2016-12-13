import React from 'react';
import UserList from '../containers/user-list';
import UserMessage from '../containers/user-message';

const App = ()=>{
    return <div id="wrapper" className="container-fluid">
        <h1>Window</h1>
        <UserList />
        <UserMessage />
    </div>;
};

export default App;