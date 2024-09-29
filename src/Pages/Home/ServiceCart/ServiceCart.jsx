import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div>
            <div className="card bg-base-100 h-96 w-96 shadow-xl">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price : ${price}</p>
                    <div className="card-actions ">
                        <Link to={`checkout/${_id}`}>
                            <button className="btn btn-error">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;