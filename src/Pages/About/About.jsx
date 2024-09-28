import person from '../../assets/images/about_us/person.jpg'
import person2 from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="mb-8">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-2/4 relative'>
                        <img
                            src={person}
                            className="w-3/4 rounded-lg shadow-2xl" />
                        <img
                            src={person2}
                            className="w-1/2 absolute rounded-lg right-5 top-1/2 border-8 border-white shadow-2xl" />
                    </div>
                    <div className='lg:w-2/3'>
                        <h3 className='text-3xl text-orange-600 font-bold'></h3>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                        <button className="btn btn-error mt-4">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;