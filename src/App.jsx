import { useState, useEffect } from "react";
import "./App.css";
import interestellar from "./assets/interestellar.jpg";
import duna from "./assets/duna.png";
import bladerunner from "./assets/bladerunner.webp";
import odisseianoespaco from "./assets/odisseianoespaco.jpg";
import devoradoresdeestrelas from "./assets/devoradoresdeestrelas.jpg";
import FilmCard from "./Components/FilmCard/FilmCard";

function App() {
  const [listaFilmes, setListaFilmes] = useState([
    {
      nome: "Interestelar",
      ano: 2014,
      diretor: "Christopher Nolan",
      imagem: interestellar,
      link: "https://www.justwatch.com/br/filme/interestelar" ,
    },
    {
      nome: "Duna",
      ano: 2021,
      diretor: "Denis Villeneuve",
      imagem: duna,
      link: "https://www.justwatch.com/br/filme/dune" ,
    },
    {
      nome: "Blade Runner 2049",
      ano: 2017,
      diretor: "Denis Villeneuve",
      imagem: bladerunner,
      link: "https://www.justwatch.com/br/filme/blade-runner-2049" ,
    },
    {
      nome: "2001: Uma Odisséia no Espaço",
      ano: 1968,
      diretor: "Stanley Kubrick",
      imagem: odisseianoespaco,
      link: "https://www.justwatch.com/br/filme/2001-uma-odisseia-no-espaco" ,
    },
    {
      nome: "Devoradores de Estrelas",
      ano: 2026,
      diretor: "Phil Lord e Christopher Miller",
      imagem: devoradoresdeestrelas,
      link: "https://www.primevideo.com/-/pt/detail/0J0SQMKFG51K9S3UTU9SDEMT7D/" ,
    },
  ]);

  const [qtdFilmes, setQtdFilmes] = useState(0);
  useEffect(() => {setQtdFilmes(listaFilmes.length);}, [listaFilmes]);

  return (
    <>
      <h1>Filmes de Ficção Científica</h1>

      <h2>Quantidade de filmes: {qtdFilmes}</h2>

      <section id="center">
        {listaFilmes.map((filme, index) => (
          <FilmCard
            key={index}
            nome={filme.nome}
            ano={filme.ano}
            diretor={filme.diretor}
            imagem={filme.imagem}
            link={filme.link}
          />
        ))}
      </section>
    </>
  );
}

export default App;
