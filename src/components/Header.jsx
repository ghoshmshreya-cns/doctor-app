import React, { useEffect, useState } from "react";
import doc1 from "../assets/doc1.jpg";
import doc2 from "../assets/doc2.jpg";
import doc3 from "../assets/doc3.jpg";
import { Link } from "react-router-dom";


const Header = () => {

    const slides = 3;
    const [activeSlide, setActiveSlide] = useState(0);

    // Auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + slides) % slides);
    };

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % slides);
    };






    return (

        <>
            <section className="bg-yellow-200 p-8">
                <div className="max-w-3xl mx-auto relative group">
                    {/* Slider */}
                    <div className="relative overflow-hidden rounded-lg ">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                        >
                            <div className="min-w-full h-64  flex items-center justify-center ">
                                <img src={doc1} alt="doc" className="w-full h-full object-cover" />
                            </div>
                            <div className="min-w-full h-64  flex items-center justify-center text-white text-4xl">
                                <img src={doc2} alt="doc" className="h-full w-full object-cover" />
                            </div>
                            <div className="min-w-full h-64  flex items-center justify-center text-white text-4xl">
                                <img src={doc3} alt="doc" className="h-full w-full object-cover" />
                            </div>
                        </div>
                    </div>



                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2.5 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2.5 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>


                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {[...Array(slides)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveSlide(i)}
                                className={`w-3 h-3 rounded-full transition-colors ${activeSlide === i ? "bg-white" : "bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <div className="w-full flex justify-center mt-16 px-4">
                <div className="bg-gray-800 relative rounded-2xl p-6 sm:p-8 space-y-8 w-full max-w-4xl text-center">
                    <div className="space-y-4">
                        <h2 className="text-white font-bold text-xl sm:text-2xl">
                            Book Your Doctor
                        </h2>
                        <p className="text-base sm:text-xl text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <Link to="/doctors">
                        <button
                            className="inline-flex items-center justify-center font-medium rounded-lg h-11 px-4 text-base sm:text-lg text-white bg-yellow-500 hover:bg-yellow-600 transition"
                            href="#"
                        >
                            Booking Here
                        </button>
                    </Link>
                </div>
            </div>




        </>



    )
}

export default Header