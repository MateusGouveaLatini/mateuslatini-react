import { useState, useEffect } from "react";
import FilmCard from "../Components/FilmCard/FilmCard";
import filmes from "../Data/filmes";


function Home() {
    const [listaFilmes, setListaFilmes] = useState(filmes);

    const [qtdFilmes, setQtdFilmes] = useState(0);
  useEffect(() => {setQtdFilmes(listaFilmes.length);}, [listaFilmes]);

  return (
    <>
      <h1>Filmes de Ficção Científica</h1>

      <h2>Quantidade de filmes: {qtdFilmes}</h2>

      <section id="center">
        {listaFilmes.map((filme) => (
          <FilmCard
            key={filme.id}
            nome={filme.nome}
            ano={filme.ano}
            diretor={filme.diretor}
            imagem={filme.imagem}
            id={filme.id}
          />
        ))}
      </section>
    </>
  );
}

export default Home;