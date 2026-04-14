import React from "react";

const TabelaFoot = (props) => (
  <tfoot>
    <tr>
      <td colSpan="5">Quantidade de Funcionários: {props.qtdFuncionarios}</td>
    </tr>
  </tfoot>
);

export default TabelaFoot;
