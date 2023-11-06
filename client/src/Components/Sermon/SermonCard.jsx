
const SermonCard = (Props) => {

  return (
    <div>
      <img src={Props.cover} alt="imagen"/>
      <h3>{Props.title}</h3>
      <h4>{Props.verse}</h4>
      <p>{Props.description}</p>
    </div>
  )
}

export default SermonCard