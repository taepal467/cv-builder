import React, { Component } from 'react';
import '../styles/experienceStyle.css'

class ExpInfo extends Component {

    render() {

        const {expName, expJobTitle, expStart, expEnd, expTasks} = this.props

        return (
            <div className='exp--container'>
            <div className='header--container'>
                <h2 className='expHeader'>Work Experience</h2>
            </div>

            <div className='expContent---container'>
                <div className='dates--container'>
                    <p className='expStart'>{ expStart ? expStart : '[Start Date]' } 
                    <span className='divider'>/</span>
                    </p>
                    <p className='expEnd'> { expEnd ? expEnd : '[End Date]' }</p>
                </div>

                <p className='expName'>{ expName ? expName : '[Company Name]' }</p>
                <p className='expJobTitle'>{ expJobTitle ? expJobTitle : '[Job Position]' }</p>
                <p className='expTasks'>{ expTasks ? expTasks : '[Tasks]' }</p>
            </div>
            </div>
        );
    }
}

export default ExpInfo;


