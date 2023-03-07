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
               
                
                        <label>Email:</label>
                        <input placeholder ='Email'
                            name='email'
                            onChange={handleChange}
                        />
                   
                
                        <label>Message:</label>
                        <input placeholder ='Message'
                            name='message'
                            onChange={handleChange}
                        />
                         <button>Submit</button> 
                </form>     
                   
                
            </Container>
                )
    }

}