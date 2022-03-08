import React from 'react';
const Movie = ({ movieList }) => {
    return (
        <React.Fragment>
            {movieList.map((movie) => (
                <li key={movie.id} className="bg-white rounded-xl flex justify-between flex-col">
                    <div className="px-3 py-5">
                        <p className="text-lg">{movie.name['ka']}</p>
                    </div>
                    <div className="flex">
                        <button className="bg-green-400 py-2 w-full hover:bg-green-500 rounded-bl-md">
                            Edit
                        </button>
                        <button className="bg-red-400 py-2 w-full hover:bg-red-500 rounded-br-md">
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </React.Fragment>
    );
};

export default Movie;
