import React from "react";
import { ViewProps, ViewState } from "../types/types";


export class UserView extends React.Component<ViewProps, ViewState>{
    render(){
        const {name, email, message, handleChange, handleSubmit, formSent}=this.props;
        return(
            <form onSubmit={handleSubmit}>
  
                <br/>
                <label>name </label>
                <input placeholder='Name' name='name' value={name} onChange={handleChange} type="text"/>

                <br/><br/>
                <label>email </label>
                <input placeholder='Email' name='email' value={email} onChange={handleChange} type="email"/>
                
                <br/><br/>
                <label>message </label>
                <input placeholder='Message' name='message' value={message} onChange={handleChange} type="text"/>  
               
                <br/>
                <br/>
                <button type="submit">enviar</button>
                <br/>
                <span>{formSent?'Formulario enviado com sucesso!':'Fail'}</span>

            </form>

        
        )
    }
}
