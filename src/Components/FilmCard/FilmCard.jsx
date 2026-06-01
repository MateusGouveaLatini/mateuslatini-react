import "./FilmCard.css" ;

function FilmCard({nome,ano,diretor,imagem,link}) {

  return (
    <div className="FilmCard">

      <img src={imagem} width={200} height={250} alt={nome} title={nome}/>

      <h2>{nome}</h2>

      <p>Ano: {ano}</p>

      <p>Diretor: {diretor}</p>

      <a href={link} target="_blank" rel="noopener noreferrer" className="btn-assistir"> 
        Onde assistir </a>

    </div>
  )
}

export default FilmCard