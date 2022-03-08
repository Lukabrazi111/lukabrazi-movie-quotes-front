import React from 'react';
import { NavLink } from 'react-router-dom';
import Movie from './Movie';

const Movies = () => {
    return (
        <React.Fragment>
            <div className="bg-gray-200 px-5 py-4 flex justify-between items-center">
                <div className="bg-gray-400 rounded py-2 px-3">
                    <NavLink
                        to={'/admin/movies'}
                        className="mr-4 hover:underline"
                    >
                        Movies
                    </NavLink>
                    <NavLink to={'/admin/quotes'} className="hover:underline">
                        Quotes
                    </NavLink>
                </div>
                <div className="flex">
                    <div className="space-x-4">
                        <button className="bg-blue-400 py-2 px-9 hover:bg-blue-500">
                            Add Movie
                        </button>
                        <button className="bg-blue-400 py-2 px-9 hover:bg-blue-500">
                            Add Quote
                        </button>
                    </div>
                    <button className="ml-5 mr-2 hover:underline">EN</button>
                    <button className="hover:underline">KA</button>
                </div>
            </div>
            <div className="w-full max-w-6xl mx-auto mt-12">
                <h1 className="text-3xl text-white font-bold text-center">
                    Movies
                </h1>
                <div className="mt-12">
                    <ul className="list-none grid grid-cols-3 gap-4">
                        <Movie />
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Movies;
