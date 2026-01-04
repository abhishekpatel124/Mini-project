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
            <h5>
                Enjoying time means living in the moment and appreciating simple joys. It is about relaxing, laughing with friends, exploring new interests, and taking breaks from routine. When we enjoy our time, stress reduces, happiness increases, and we create memories that refresh our mind and give positive energy.
            </h5>
            <h4>Owner : {props.username} <hr /> Mobile NO :- {props.Contact}</h4>
        </div>
    )
}

export default Card