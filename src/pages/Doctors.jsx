import React from 'react';
import Navbar from '../components/Navbar';
import doc4 from '../assets/doc4.jpg';
import doc5 from '../assets/doc5.jpg';
import doc6 from '../assets/doc6.jpg';
import doc7 from '../assets/doc7.jpg';
import { Link } from 'react-router-dom';

const Doctors = () => {
    return (
        <div>
            <Navbar />
            <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
                <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">



                    {/* doc1 */}
                    <section className="p-5 py-10 bg-purple-50 text-center  cursor-pointer">
                        <img
                            src={doc4}
                            alt="doctor"
                        />
                        <h1 className="text-3xl my-5">Dr Allen</h1>
                        <p className="mb-5">
                            General Physician
                        </p>

                        <Link to="/booking/doc1">
                            <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                                Book
                            </button>
                        </Link>
                    </section>


                    {/* doc2 */}
                    <section className="p-5 py-10 bg-green-50 text-center  cursor-pointer">
                        <img
                            src={doc5}
                            alt="doctor"
                        />
                        <h1 className="text-3xl my-5">Dr Harry</h1>
                        <p className="mb-5">
                            ENT
                        </p>
                        <Link to="/booking/doc2">
                            <button className="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600">
                                Book
                            </button>
                        </Link>
                    </section>


                    {/* doc3 */}
                    <section className="p-5 py-10 bg-red-50 text-center  cursor-pointer">
                        <img
                            src={doc6}
                            alt="doctor"
                        />

                        <h1 className="text-3xl my-5">Dr Soni</h1>
                        <p className="mb-5">
                            Cardiologist
                        </p>

                        <Link to="/booking/doc3">
                            <button className="p-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600">
                                Book
                            </button>
                        </Link>
                    </section>





                    {/* doc4 */}
                    <section className="p-5 py-10 bg-blue-50 text-center  cursor-pointer">
                        <img
                            src={doc7}
                            alt="doctor"
                        />
                        <h1 className="text-3xl my-5">Dr Disuza</h1>
                        <p className="mb-5">
                            Orthopaedic
                        </p>
                        <Link to="/booking/doc4">
                            <button className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                Book
                            </button>
                        </Link>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Doctors