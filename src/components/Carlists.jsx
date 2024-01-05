import React, { useState, useEffect } from 'react'
import { getCarsData } from '../../utils/index'
import hero from '../assets/hero.png'

const Carlists = () => {

    const [carsData, setCarsData] = useState(null);
    const [searchModel, setSearchModel] = useState('');
    const [searchMake, setSearchMake] = useState('');
    const [selectedCar, setSelectedCar] = useState(null);

    const fetchData = async () => {
        try {
            const searchCar = {
                model: searchModel,
                make: searchMake,
            };
            const data = await getCarsData(searchCar);
            setCarsData(data);
        } catch (error) {
            console.error(`Error fetching cars ${error}`)
        }
    };

    useEffect(() => {
        fetchData();
    }, [searchModel, searchMake]);

    const handleSearchModel = (event) => {
        setSearchModel(event.target.value);
    };

    const handleSearchMake = (event) => {
        setSearchMake(event.target.value);
    };

    const openModal = (car) => {
        setSelectedCar(car);
        document.getElementById('my_modal_1').showModal();
    };

    return (
        <section className='container mx-auto my-[5rem]'>
            <div className='flex justify-end my-[1rem] gap-1'>
                <input
                    type="text"
                    placeholder="Search Model"
                    onChange={handleSearchModel}
                    className="input input-bordered w-full max-w-xs"
                />
                <input
                    type="text"
                    placeholder="Search Manufacturer"
                    onChange={handleSearchMake}
                    className="input input-bordered w-full max-w-xs"
                />
            </div>
            <div className='grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[1rem]'>
                {carsData ? (
                    carsData.map((car, index) => (
                        <div
                            key={car.id || index}
                            className="card card-compact w-full bg-base-100 shadow-xl"
                        >
                            <div className="card-body">
                                <figure>
                                    <img
                                        src={hero}
                                        alt="Car" />
                                </figure>
                                <h2 className="card-title" style={{ textTransform: 'uppercase' }}>{car.model}</h2>
                                <p style={{ textTransform: 'Capitalize' }}>Class: {car.class}</p>
                                <div className="card-actions justify-between items-center">
                                    <div className='flex gap-1'>
                                        <div className="badge badge-outline">{car.drive}</div>
                                        <div className="badge badge-outline">{car.year}</div>
                                    </div>
                                    <div>
                                        <button className="badge badge-outline btn btn-xs" onClick={() => openModal(car)}>View More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Search a car...</p>
                )}
            </div>
            {selectedCar && (
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box" style={{ textTransform: 'Capitalize' }}>
                        <figure>
                            <img
                                src={hero}
                                alt="Car" />
                        </figure>
                        <h2 className='card-title text-[1.7rem] pb-[10px]'>{selectedCar.model}</h2>
                        <p className='flex justify-between pb-[5px]'>
                            <span>Make</span>
                            <span>{selectedCar.make}</span>
                        </p>
                        <p className='flex justify-between pb-[5px]'>
                            <span>Class</span>
                            <span>{selectedCar.class}</span>
                        </p>
                        <p className='flex justify-between pb-[5px]'>
                            <span>Year</span>
                            <span>{selectedCar.year}</span>
                        </p>
                        <p className='flex justify-between pb-[5px]'>
                            <span>City MPG</span>
                            <span>{selectedCar.city_mpg}</span>
                        </p>
                        <p className='flex justify-between pb-[5px]'>
                            <span>Highway MPG</span>
                            <span>{selectedCar.highway_mpg}</span>
                        </p>
                        <p className='flex justify-between pb-[5px]'>
                            <span>Combination MPG</span>
                            <span>{selectedCar.combination_mpg}</span>
                        </p>
                        <p className='flex justify-between pb-[5px]'>
                            <span>Fuel Type</span>
                            <span>{selectedCar.fuel_type}</span>
                        </p>
                        <p className='flex justify-between pb-[5px]'>
                            <span>Transmission</span>
                            <span>{selectedCar.transmission}</span>
                        </p>
                        <p className='flex justify-between pb-[5px]'>
                            <span>Displacement</span>
                            <span>{selectedCar.displacement}</span>
                        </p>
                        <p className='flex justify-between pb-[5px]'>
                            <span>Cylinders</span>
                            <span>{selectedCar.cylinders}</span>
                        </p>
                        <p className='flex justify-between pb-[5px]'>
                            <span>Drive</span>
                            <span>{selectedCar.drive}</span>
                        </p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn" onClick={() => document.getElementById('my_modal_1').close()}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
        </section>
    )
}

export default Carlists