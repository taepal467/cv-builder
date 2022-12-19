import React, { Component } from 'react';

class EduInputs extends Component {

    render() {

        const {schoolName, degree, gradYear, field, handleChange,  } = this.props

        return (
            <div>
            <form>
                <fieldset>
                    <legend>Education</legend>

                    <label htmlFor='degree'></label>
                    <input 
                        onChange={ handleChange }
                        value={ degree || '' }
                        type='text' 
                        name='degree' 
                        id='degree' 
                        placeholder='Degree' />
                    <br></br>

                    <label htmlFor='field'></label>
                    <input 
                        onChange={ handleChange }
                        value={ field || ''}
                        type='text' 
                        name='field' 
                        id='field' 
                        placeholder='Field of Study' />
                    <br></br>

                    <label htmlFor='schoolName'></label>
                    <input 
                        onChange={ handleChange }
                        value={ schoolName || ''}
                        type='text' 
                        name='schoolName' 
                        id='schoolName' 
                        placeholder='School Name' />
                    <br></br>

                    <label htmlFor='gradYear'></label>
                    <input 
                        onChange={ handleChange }
                        value={ gradYear || ''}
                        type='text'
                        name='gradYear' 
                        id='gradYear' 
                        placeholder='Graduation Date mm/yyyy' />
                     <br></br>

                </fieldset>
            </form>
            </div>
        );
    }

}

export default EduInputs;