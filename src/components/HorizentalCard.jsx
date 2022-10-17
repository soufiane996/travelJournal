function HorizentalCard(props) {
    return ( 
        <section className="horizental--card">
           <div className="card-image">
              <img src={props.imageUrl} />
           </div>
           <div className="card-location">
           <div className="card-location--details"> 
              <p><i className="fa-solid fa-location-dot"/> {props.location}</p>
              <p className="location--link"><a href={props.googleMapsUrl}>View on Google Maps</a></p>
           </div>
           <div className="card-location--info">
                <h1>{props.title}</h1>
                <h5> {props.startDate} - {props.endDate} </h5>
                <p>{props.description}</p>
           </div>
           </div>
           
        </section>
    );
}

export default HorizentalCard;