import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './app.css';

class Square extends Component {
    render(){
    return (
        <div className="square"> 
            HELLO!!!!!!
        </div>
        );
    }   
};


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Square />,
        document.getElementById('calendar')
    );
});


