import React from "react";
import { Container } from "./formulario-style";
import { ViewProps, ViewState } from "../../types/types";
import { FORMERR } from "dns";

export class UserView extends React.Component<ViewProps, ViewState>{
    render(){
        const { name, email, message, handleChange, handleSubmit, formSent }=this.props;
        
        return(
            <Container>
                 <form onSubmit ={handleSubmit}>
                    
                        <label>Nome:</label>
                        <input placeholder ='Name'
                        name='name'
                        onChange={handleChange}
                         />
                        <br/>
                
                        <label>Email:</label>
                        <input placeholder ='Email'
                            name='email'
                            onChange={handleChange}
                        />
                        <br/>
                        <label>Message:</label>
                        <input placeholder ='Message'
                            name='message'
                            onChange={handleChange}
                        />
                        <br/>
                         <button type = 'submit'>Submit</button> 
                        <span>{formSent?'Formulario enviado com sucesso!': 'Erro'}</span>
                </form>     
                   
                
            </Container>
                )
    }

}
//dads