import React from 'react';
import {NavLink,useNavigate} from 'react-router-dom'


function Cadastro(){

    return(
        <div className="wrapper_cadastro">
            <div className="saudacao_cadastro">
                <h1>Criar Conta</h1>
                <p>Cria uma nova conta</p>
                <p className="message"> mensagem</p>
            </div>
                <form className="formulario_cadastro" >
                    <div>
                        <label htmlFor="Nome">Nome:</label>
                        <input id="nome" name="nome" type="text"/>
        
                        <label htmlFor="email">Email:</label>
                        <input id="email" name="email" type="email"/>
        
                        <label htmlFor="password">Senha:</label>
                        <input id="password" name="password" type="password"/>
                    </div>
                    <div>
                        <button className="logar_cadastro" type="submit" >Criar</button>
                        <p>já tem uma conta? <NavLink to="/login">Logar</NavLink></p>
                    </div>
                </form>
        </div>
    )
}

export default Cadastro;