function Card(props) {


  return (
    <>
        <div className="card">
            <img src={props.item.img} width="150px" height="220px"/>

    <div className='details'>
            <p className="location"> 

📍 {props.item.location} <a href={props.item.mapLink}>View on Google Maps</a></p>

            <h1>{props.item.place}</h1>
            <h5>{props.item.date}</h5>
            <p className="description">{props.item.description}</p>
      </div>
        </div>
        
      <div className="hr"></div>

    </>
  );
}

export default Card