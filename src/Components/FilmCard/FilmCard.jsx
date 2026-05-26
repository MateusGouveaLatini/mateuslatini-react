function FilmCard({nome,ano,diretor,imagem}) {

  return (
    <div className="FilmCard">

      <img src={imagem} width={200} height={250} alt={nome} title={nome}/>

      <h2>{nome}</h2>

      <p>Ano: {ano}</p>

      <p>Diretor: {diretor}</p>

    </div>
  )
}

export default FilmCard