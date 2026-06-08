import "./FilmCard.css";
import { Link } from "react-router-dom";

function FilmCard({ id, nome, ano, diretor, imagem, mostrarBotao = true }) {
  return (
    <div className="FilmCard">
      <img
        src={imagem}
        width={200}
        height={250}
        alt={nome}
      />

      <h2>{nome}</h2>

      <p>Ano: {ano}</p>

      <p>Diretor: {diretor}</p>

       {mostrarBotao && (
      <Link
        to={`/mateuslatini-react/${id}`}
        className="btn-assistir"
      >
        Ver detalhes
      </Link>
    )}
  </div>
);
}
export default FilmCard;