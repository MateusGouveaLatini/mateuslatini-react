import { useParams, Link } from "react-router-dom";
import filmes from "../Data/filmes";
import FilmCard from "../Components/FilmCard/FilmCard";

function Filme() {
  const { filmesId } = useParams();

  const filme = filmes.find(
    (filme) => filme.id === Number(filmesId)
  );

  if (!filme) {
    return <h1>Filme não encontrado</h1>;
  }

  return (
    <div className="filme-container">
      <FilmCard
        id={filme.id}
        nome={filme.nome}
        ano={filme.ano}
        diretor={filme.diretor}
        imagem={filme.imagem}
        mostrarBotao={false}
      />

      <p>Oscar: {filme.oscar}</p>

      <a
        href={filme.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-assistir"
      >
        Onde assistir
      </a>

      <Link to="/mateuslatini-react/" className="btn-assistir">
        Voltar
      </Link>
    </div>
  );
}

export default Filme;