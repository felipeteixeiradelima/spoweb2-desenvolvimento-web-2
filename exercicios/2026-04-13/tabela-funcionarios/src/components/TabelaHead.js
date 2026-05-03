import React from "react";

const TabelaHead = (props) => (
  <thead>
    <tr>
      <th colSpan="5">Tabela de Livros</th>
    </tr>
    <tr>
      <th>CPF</th>
      <th>
        Nome
        <div className="container-setas">
          <div onClick={() => props.ordenarCrescente()}>&#129093;</div>
          <div onClick={() => props.ordenarDecrescente()}>&#129095;</div>
        </div>
      </th>
      <th>Cargo</th>
      <th>Salário</th>
      <th></th>
    </tr>
  </thead>
);

export default TabelaHead;
