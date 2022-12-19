import React, { Component } from 'react';

class GeneralInputs extends Component {

    render() {
   
        const {name, title, summary, email, phone ,location, social, handleChange} = this.props;

        return(
            <form>
                <fieldset>
                <legend >General Information: </legend>
                    <label htmlFor="name"></label>
                    <input 
                        onChange={ handleChange }
                        value={ name || '' }
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder='Name' />
                    <br></br>

                    <label htmlFor="title"></label>
                    <input 
                        onChange={ handleChange }
                        value={ title  || ''}
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder='Job Title' />
                    <br></br>

                    <label htmlFor="location"></label>
                    <input 
                        onChange={ handleChange }
                        value={ location || ''}
                        type="text" 
                        id="location" 
                        name="location" 
                        placeholder='City, State' />
                    <br></br>

                    <label htmlFor="email"></label>
                    <input 
                        onChange={ handleChange }
                        value={ email || ''}
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder='Email: 123example@gmail.com' />
                    <br></br>

                    <label htmlFor="phone"></label>
                    <input 
                        onChange={ handleChange }
                        value={ phone || ''}
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder='Phone: 123-456-7890' />
                    <br></br>

                    <label htmlFor="social"></label>
                    <input 
                        onChange={ handleChange }
                        value={ social || '' }
                        type="url" 
                        id="social" 
                        name="social" 
                        placeholder='personal website or linkedin profile' />
                    <br></br>

                    <label htmlFor="summary"></label>
                    <textarea 
                        onChange={ handleChange }
                        value={ summary || ''}
                        name="summary" 
                        id='summary' 
                        placeholder='Professional Summary...' />
                    <br></br>
                </fieldset>         
            </form>
  
        )
    }

}

export default GeneralInputs;