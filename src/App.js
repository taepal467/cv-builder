import React, { Component } from 'react'
import './styles/App.css';
import Header from './components/Header';
import GeneralInputs from './components/formInputs/GeneralInputs';
import GeneralInfo from './components/GeneralInfo';
import ExpInputs from './components/formInputs/ExpInputs';
import ExpInfo from './components/ExpInfo';
import EduInputs from './components/formInputs/EduInputs';
import EduInfo from './components/EduInfo';
import References from './components/References';

class App extends Component {
constructor() {
  super()

  this.state = {
    general: {
      name: '',
      title: '',
      summary: '',
      email: '',
      phone: '',
      location: '',
      social: ''
    },

    work: {
      companyName: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      tasks: ''
    },

    education: {
      schoolName: '',
      degree: '',
      gradYear: '',
      field: ''
    },

  }

  this.handleChange = this.handleChange.bind(this);
}

handleChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
}

  render() {

    return (
      <div className="App">
        <div className='form--container'>
          <div className='form--header'>
          <Header />
          </div>
          <div className='form--inputs'>
            <GeneralInputs  
              name={ this.state.name }
              title={ this.state.title }
              summary={ this.state.summary }
              email={ this.state.email }
              phone={ this.state.phone }
              location={ this.state.location }
              social={ this.state.social }
              handleChange={ this.handleChange }
            />
            <ExpInputs 
              companyName={ this.state.companyName }
              jobTitle={ this.state.jobTitle }
              startDate={ this.state.startDate }
              endDate={ this.state.endDate }
              tasks={ this.state.tasks }
              handleChange={ this.handleChange }      
            />
            <EduInputs 
              schoolName={ this.state.schoolName }
              degree={ this.state.degree }
              gradYear={ this.state.gradYear }
              field={ this.state.field }
              handleChange={ this.handleChange }
            />
          </div>
        </div>
        <div className='form--outputs'>
            <GeneralInfo 
              genName={ this.state.name }
              genTitle={ this.state.title }
              genSummary={ this.state.summary }
              genEmail={ this.state.email }
              genPhone={ this.state.phone }
              genLocation={ this.state.location }
              genSocial={ this.state.social }
            />
            <ExpInfo 
              expName={ this.state.companyName }
              expJobTitle={ this.state.jobTitle }
              expStart={ this.state.startDate }
              expEnd={ this.state.endDate }
              expTasks={ this.state.tasks }
            />
            <EduInfo 
              eduName={ this.state.schoolName }
              eduDegree={ this.state.degree }
              eduGradYear={ this.state.gradYear }
              eduField={ this.state.field }
            />
            <References />
        </div>
      </div>
    );
  }
}

export default App;
