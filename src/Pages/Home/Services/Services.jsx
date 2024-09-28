import { useEffect, useState } from "react";
import ServiceCart from "../ServiceCart/ServiceCart";

const Services = () => {
   
    const [service, setService] = useState([]);
    
    useEffect( () => {
       fetch('services.json')
       .then(res => res.json())
       .then(data => setService(data))
    }, []);

    return (
        <div>
            <div className="space-y-5 text-center mb-9">
                <h3 className="text-3xl text-orange-500">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {
                service.map(service => <ServiceCart key={service._id}
                    service={service}
                ></ServiceCart>)
            }
            </div>
        </div>
    );
};

export default Services;