import React, { Component } from 'react';
import './App.css';

import Login from './components/Login'
import Welcome from './components/Welcome'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { 
      name: '', 
      password:'',
      alert:'' ,
      nameCorrect: 'guicouto',
      passwordCorrect: '123',
      login: false
    }

    this.handleName = this.handleName.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.verificaLogin = this.verificaLogin.bind(this)
    this.logout = this.logout.bind(this)
}

  handleName(e) {
    this.setState({ ...this.state, name: e.target.value });
  };
  handlePassword(e) {
    this.setState({ ...this.state, password: e.target.value });
  };

  verificaLogin(){
    if(this.state.name === this.state.nameCorrect 
      && this.state.password === this.state.passwordCorrect ){
        this.setState({ ...this.state, login:true, alert:'' });
        alert('Cuidado com o Miranha');
    }else{
      this.setState({ ...this.state, alert: 'Login ou Senha invalidos' })
    }
  }

  logout(){
    this.setState({ ...this.state, login:false, name:'',password:'' });
  }

  render(){
    if(!this.state.login){
      return (
        <div className="App">
          <Login name={this.state.name} password={this.state.password} alert={this.state.alert}
           handleName={this.handleName} handlePassword={this.handlePassword} 
           verificaLogin={this.verificaLogin}/>
        </div>)
    }else{
      return(
        <div  className="App">
          <Welcome logout={this.logout}/>
        </div>)
    }
    
  }





}

export default App;
