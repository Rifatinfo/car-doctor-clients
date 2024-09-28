import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"
import img5 from "../../../assets/images/banner/5.jpg"
import img6 from "../../../assets/images/banner/6.jpg"
const Slider = () => {

    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={img1} className="w-full h-full object-cover rounded-lg" alt="Slide 1" />
                    <div className="absolute rounded-lg inset-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-5">
                        <div className="space-y-5 ml-5">
                            <h1 className="font-bold text-6xl text-white">
                                Affordable Price <br />
                                For Car <br />
                                Servicing
                            </h1>
                            <p className="text-white">
                                There are many variations of passages available, but the majority
                                have suffered alteration in some form.
                            </p>
                            <div className="flex items-center gap-3">
                                <button className="btn btn-outline border-2 border-orange-600">
                                    Discover More
                                </button>
                                <button className="btn btn-error">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-5 bottom-0 top-3/4 flex items-center justify-between gap-4 ">
                        <a href="#slide6" className="btn btn-circle bg-orange-500">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle bg-orange-500">
                            ❯
                        </a>
                    </div>
                </div>

                {/* Slide 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-full object-cover" alt="Slide 2" />
                    <div className="absolute right-5 bottom-0 top-0 flex items-center justify-between gap-4">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>

                {/* Slide 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full h-full object-cover" alt="Slide 3" />
                    <div className="absolute right-5 bottom-0 top-0 flex items-center justify-between gap-4">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>

                {/* Slide 4 */}
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full h-full object-cover" alt="Slide 4" />
                    <div className="absolute right-5 bottom-0 top-0 flex items-center justify-between gap-4">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide5" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>

                {/* Slide 5 */}
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className="w-full h-full object-cover" alt="Slide 5" />
                    <div className="absolute right-5 bottom-0 top-0 flex items-center justify-between gap-4">
                        <a href="#slide4" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide6" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>

                {/* Slide 6 */}
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className="w-full h-full object-cover" alt="Slide 6" />
                    <div className="absolute right-5 bottom-0 top-0 flex items-center justify-between gap-4">
                        <a href="#slide5" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Slider;