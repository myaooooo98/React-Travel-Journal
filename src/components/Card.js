
export default function Card(props) {
    console.log(props)
    return (
        <div className="card--content">
            <img src={props.img} className="card--img"/>
            <div className="card--text">
                <div className="card--stats">
                    <img src="../images/mapper.png" className="card--mapper"/>
                    <span className="card--location">{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--desc">{props.description}</p>
            </div>
        </div>
    )
}