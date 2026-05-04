import React from "react";

function Home() {
  return (
    <>
      <h2>Lançamentos</h2>
      <div className="card">
        <div className="thumb">
          <img src="livros/9788539507672.jpg" alt="" />
        </div>
        <div className="detalhes">
          <h3>Uma Breve História do Mundo</h3>
          <p>No livro, Blainey conduz...</p>
          <a href="#">Leia main</a>
        </div>
      </div>
      <div className="card">
        <div className="thumb">
          <img src="livros/9788539502493.jpg" alt="" />
        </div>
        <div className="detalhes">
          <h3>Uma Breve História da Ciência</h3>
          <p>A história da ciência...</p>
          <a href="#">Leia main</a>
        </div>
      </div>
    </>
  );
}

export default Home;
