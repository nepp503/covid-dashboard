import React from 'react';
import './header.css';
import Burger from '../burger/burger';

export default class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <h1>SUPER COVID DASHBOARD by brothers blues</h1>
                <Burger />
            </div>
        )
    }
}