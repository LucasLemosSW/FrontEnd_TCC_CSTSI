
import React from 'react';
import {NavLink,useNavigate,useLocation } from 'react-router-dom'
// import './login.css';

function Login(){

    const location = useLocation();
    const navigate = useNavigate();

    return(
        <div className="wrapper_login">
            <div className="cabecalho_login"></div>
            <div className="saudacao_login">
                {/* <img className="logo_login img_logo" onClick={()=>navigate("/")} src={require('../assets/dragndroplogo.png')} alt=""/> */}
                <h1>Bem vindo!</h1>
                <p>Faça login para continuar</p>
                <p>mensagem</p>
                <p className="message">mensagem</p>
            </div>
            <form className="formulario_login" >
                {/* //onSubmit={logar}> */}
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" type="email"/>

                    <label htmlFor="password">Senha:</label>
                    <input id="password" name="password" type="password"/>
                </div>
                <div>
                    <button className="logar_login" type="submit">Logar</button>
                    <p>Não tem uma conta? <NavLink to="/cadastro">Criar Conta</NavLink></p>
                </div>
            </form>
        </div>
    )
}

export default Login;