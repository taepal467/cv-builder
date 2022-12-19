import React, { Component } from 'react'
import '../styles/generalStyle.css'

export default class GeneralInfo extends Component {

    render() {

        const { genName, genTitle, genSummary, genEmail, genPhone, genLocation, genSocial } = this.props;
        return(
            <div className='generalInfo--container'>
                <div className='intro--container'>
                    <h1 className='fullName'>{ genName ? genName : 'Your Name' }</h1>
                    <h2 className='title'>{ genTitle ? genTitle : 'Title' }</h2> 
                    <h3 className='location'>{ genLocation ? genLocation : 'City, State' }</h3>
                </div>
                <div className='contact--container'>
                    <h4 className='email'>
                        <img src="https://img.icons8.com/ios/50/null/filled-message.png" 
                        alt="icons8 email icon" 
                        className='image'/>
                        { genEmail ? genEmail : 'Email' }
                    </h4>
                
                    <h4 className='phone'>
                        <img src="https://img.icons8.com/ios/50/null/phone--v1.png" 
                        alt=" icons8 phone icon" 
                        className='image'/>
                        { genPhone ? genPhone : 'Phone' }
                    </h4>
               
                    <h4 className='social'>
                        <img src="https://img.icons8.com/ios/50/null/internet--v1.png" 
                        alt="icons8 internet icon" 
                        className='image'/>
                        { genSocial ? genSocial : 'Social Link'}
                    </h4>
                </div>
                <div className='summary--container'>
                    <p className='summary'>{ genSummary ? genSummary : '[Summary]' }</p>
                </div>
            </div>
        )
    }
}

