import { ViewProps, ViewState } from "../../types/types"

import React from "react"



export class UserView extends React.Component<ViewProps,ViewState>{

    render(){
        const{
            name,
            email,
            message,
            handleChange,
            handleSubmit,
            formSent

        } = this.props

        return(
            <form onSubmit={handleSubmit}>
                
              <center>
              <h1>CADASTRO DO USUARIO</h1> 
              </center>
                <label>Name</label>
                <input placeholder = 'Name' name = "name" onChange={handleChange} type="text"/>
                <br/>
                <br/>
                
                
                <span>Email</span>
                <input placeholder = 'Email'name = "email" onChange={handleChange} type="email" />
                <br/>
                <br/>
                
                <span>Mensagem</span>
                <textarea>Digite Aqui sua Mensagem... </textarea>
                <br/>
                <br/>
                
                <button>enviar</button>
             </form>
        
        )
    }
}

