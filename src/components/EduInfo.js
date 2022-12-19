import React, { Component } from 'react';
import '../styles/educationStyle.css';

class EduInfo extends Component {

    render() {
        const {eduName, eduDegree, eduGradYear, eduField } = this.props

        return (
            <div className='edu--container'>
                <div className='eduHeader--container'>
                    <h2 className='edu--header'>Education </h2>
                </div>
                <div className='eduContent--container'>
                    <p className='eduDegree'>{eduDegree ? `${eduDegree} in ${eduField}` : '[Degree] in [Field of study or major]'}</p>
                    <p className='eduName'>{eduName ? eduName : '[School Name]'}</p>
                    <p className='eduGradYear'>{eduGradYear ? eduGradYear : '[Graduation Date MM/YYYY]'}</p>
                </div>
            </div>
        );
    }
}

export default EduInfo;


