import React, { Component } from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaFoot from "./components/TabelaFoot";
import TabelaBody from "./components/TabelaBody";

class App extends Component {
  state = {
    livros: [],
  };

  componentDidMount() {
    fetch("/api/funcionarios.json")
      .then((response) => response.json())
      .then((funcionarios) => this.setState({ funcionarios }))
      .catch((error) => console.error(error));
  }

  handleExcluirLinha(cpf) {
    const funcionariosMantidos = this.state.funcionarios.filter(
      (funcionario) => funcionario.cpf !== cpf
    );
    this.setState({ funcionariosMantidos });
  }

  handleOrdenarCrescente() {
    const funcionariosReordenados = this.state.funcionarios.sort((a, b) =>
      a.nome < b.nome ? -1 : 0
    );
    this.setState({ funcionariosReordenados });
  }

  handleOrdenarDecrescente() {
    const funcionariosReordenados = this.state.funcionarios.sort((a, b) =>
      a.nome > b.nome ? -1 : 0
    );
    this.setState({ funcionariosReordenados });
  }

  render() {
    return (
      <table className="tabela">
        <TabelaHead
          ordenarCrescente={this.handleOrdenarCrescente}
          ordenarDecrescente={this.handleOrdenarDecrescente}
        />
        <TabelaFoot />
        <TabelaBody
          funcionarios={this.state.funcionarios}
          excluirLinha={this.handleExcluirLinha}
        />
      </table>
    );
  }
}

export default App;
