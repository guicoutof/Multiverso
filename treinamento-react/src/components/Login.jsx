import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import './Login.css'

export default function Login (props){

    return<div className="login"> 
            <Paper className="loginPaper">
                <h1>Login</h1>
                <TextField className="componenteLogin"
                    id="name"
                    label="Nome"
                    value={props.name}
                    onChange={props.handleName}
                    margin="normal"
                />
                <TextField className="componenteLogin"
                    id="password"
                    label="Senha"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={props.handlePassword}
                />
                <Button variant="contained" color="secondary" className="componenteLogin btn"
                 onClick={props.verificaLogin}>
                    Entrar no Multiverso
                </Button>
                
            </Paper>
            <div>
                <h2 className="alerta">{props.alert}</h2>
            </div>
            </div>
    
}