import React from "react";
import Main from "../template/Main";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <Main icon="home" title="Início"
        subtitle=" Projeto CRUD - Create, Read, Update e Delete">
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-0">Projeto desenvolvido para o Seminário Interdisciplinar: Implementação de uma Aplicação WEB!</p>
    </Main>