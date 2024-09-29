import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const BookService = () => {
    const service = useLoaderData();
    const { title, _id , price, img} = service;

    const {user} = useContext(AuthContext);
    const handleBookService = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const booking = {
            customerName : name,
            email,
            date,
            img,
            service : _id,
            price : price
        }
        console.log(booking);
        
        // send data 
        fetch('http://localhost:5000/bookings', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
               alert('service book successfully')
            }
        })
    

    }
    return (

        <div>
            <h2>Book Service : {title}</h2>
            <div className="mt-12 mb-12">
                <div>
                    <form onSubmit={handleBookService}>
                        <div className=" flex items-center gap-5">
                            <div className="w-1/2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="name" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="text" placeholder="price" name="price" defaultValue={'$' + price} className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="date" name="date"  className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-error">Order Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookService;