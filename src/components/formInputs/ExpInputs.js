import React, { Component } from 'react';

class ExpInputs extends Component {

    render() {

        const {companyName, jobTitle, startDate, endDate, tasks, handleChange } = this.props;
   
        return (
            <div>
            <form>
                <fieldset>
                    <legend>Work History</legend>
                        <label htmlFor='companyName'></label>
                        <input 
                            onChange={ handleChange }
                            value={ companyName || ''}
                            type='text' 
                            name='companyName' 
                            id='companyName' 
                            placeholder='Company Name' />
                        <br></br>

                        <label htmlFor='jobTitle'></label>
                        <input 
                            onChange={ handleChange }
                            value={ jobTitle || ''}
                            type='text' 
                            name='jobTitle' 
                            id='jobTitle' 
                            placeholder='Job Position' />
                        <br></br>

                        <label htmlFor='startDate' className='start--date label--text'>Start Date:</label>
                        <input 
                            onChange={ handleChange }
                            value={ startDate || ''}
                            type='date' 
                            placeholder='Start:'
                            name='startDate' 
                            id='startDate' />
                        <br></br>

                        <label htmlFor='endDate' className='end--date label--text'>End Date:</label>
                        <input 
                            onChange={ handleChange }
                            value={ endDate || ''}
                            type='date' 
                            name='endDate' 
                            id='endDate' />
                        <br></br>
              
                        <label htmlFor='tasks'></label>
                        <textarea 
                            onChange={ handleChange }
                            value={ tasks || ''}
                            name='tasks'
                            id='tasks'
                            placeholder='Job tasks and responsibilities...' />
                        <br></br>
                </fieldset>
            </form>

            </div>
        );
    }

}

export default ExpInputs;