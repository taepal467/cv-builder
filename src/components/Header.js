import React , { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='main-header--container'>
                <h1>CV Builder</h1>
                <p>Created by <a href="https://github.com/taepal467" target={'_blank'}>taepal467</a>
                </p>
            </div>
        
        );
    }
}

export default Header;