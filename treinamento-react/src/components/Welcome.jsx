import React from 'react'
import Button from '@material-ui/core/Button'
import './Welcome.css'

export default (props)=>
    <div className="welcome">
        <h1>Bem vindo ao Miranhaverso</h1>
        <Button variant="contained" color="secondary" className="componenteLogout btn"
                 onClick={props.logout}>
        Sair do Multiverso
        </Button>
    </div>
