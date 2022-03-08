import React from 'react';

import { NavLink } from 'react-router-dom';

const DashboardLayout = (props) => {
    return (
        <React.Fragment>
            <div className="bg-gray-200 px-5 py-4 flex justify-between items-center">
                <div className="bg-gray-400 rounded py-2 px-3">
                    <NavLink
                        to={'/admin/movies'}
                        className={({ isActive }) =>
                            `mr-2 ${isActive ? 'underline' : ''}`
                        }
                    >
                        Movies
                    </NavLink>
                    <NavLink
                        to={'/admin/quotes'}
                        className={({ isActive }) =>
                            isActive ? 'underline' : ''
                        }
                    >
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
            {props.children}
        </React.Fragment>
    );
};

export default DashboardLayout;
