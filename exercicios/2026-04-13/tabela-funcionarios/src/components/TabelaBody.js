import React from "react";

const TabelaBody = (props) => (
  <tbody>
    {props.funcionarios.map((funcionario) => (
      <tr>
        <td>{funcionario.cpf}</td>
        <td>{funcionario.nome}</td>
        <td>{funcionario.cargo}</td>
        <td>{funcionario.salario}</td>
        <td>
          <button
            className="excluir"
            onClick={() => props.excluirLinha(funcionario.cpf)}
          >
            Excluir
          </button>
        </td>
      </tr>
    ))}
  </tbody>
);

export default TabelaBody;
