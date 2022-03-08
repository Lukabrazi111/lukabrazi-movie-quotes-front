const Movie = (props) => {
    return (
        <li className="bg-white rounded-xl flex justify-center flex-col">
            <div className="border-b px-3 py-5">
                <p className="text-sm">Movie</p>
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
    );
};

export default Movie;
