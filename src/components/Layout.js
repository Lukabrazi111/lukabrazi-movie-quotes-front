import React from 'react';

const Layout = (props) => {
    return (
        <React.Fragment>
            <main className="bg-primary flex justify-center items-center mt-6">
                <a
                    href="{{ route('admin.show') }}"
                    className="text-white hover:underline mr-4"
                >
                    Admin Panel
                </a>
                <a
                    href="{{ route('user.logout') }}"
                    className="text-white hover:underline mr-4"
                >
                    Logout
                </a>
                <a
                    href="{{ route('user.index') }}"
                    className="text-white hover:underline"
                >
                    Login
                </a>
            </main>
            {props.children}
            <main className="fixed top-1/2 ml-10 flex items-center justify-center flex-col gap-2">
                <form action="ka" method="post">
                    <button
                        type="submit"
                        className="text-center hover:bg-white hover:text-black w-12 text-white border p-3 rounded-full"
                    >
                        ka
                    </button>
                </form>
                <form action="en" method="post">
                    <button
                        type="submit"
                        className="text-center hover:bg-white hover:text-black w-12 text-white border p-3 rounded-full"
                    >
                        en
                    </button>
                </form>
            </main>
        </React.Fragment>
    );
};

export default Layout;
