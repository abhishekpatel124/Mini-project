function Card({ img, username, Contact,category }) {
    const props = { img, username, Contact, category };

    return (
        <div className="card">
            <div className="logo">

                <img
                    src={img}
                    alt="Card visual"
                />
            </div>
            <h2>Enjoy Time</h2>
            <h3>Best Memories</h3>
            <h5>
                To enjoy join us here we Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt sed modi delectus et dicta dignissimos voluptates facilis itaque quo quae.
            </h5>
            <h4>Owner : {props.username} <hr /> Mobile NO :- {props.Contact}</h4>
        </div>
    )
}

export default Card