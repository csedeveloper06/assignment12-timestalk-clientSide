

const Gallery = () => {
    return (
        <div className="max-w-screen-xl p-5 mx-auto bg-gray-100 text-gray-800 my-24">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
                <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group bg-gray-500" style={{
                backgroundImage: `url("https://i.ibb.co/tCcqdpJ/art.jpg")`
                }}>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline text-gray-100 bg-violet-600">Art</a>
                        <div className="flex flex-col justify-start text-center text-gray-100">
                            <span className="text-3xl font-semibold leadi tracki">31</span>
                            <span className="leadi uppercase">Jul</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold text-gray-100">Art Community Comes Together for Climate Change Awareness through Eco-Friendly Installations.</a>
                    </h2>
                </div>
                <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500" style={{ backgroundImage: `url("https://i.ibb.co/grm6kgP/politics.webp")`}}>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline text-gray-100 bg-violet-600">Politics</a>
                        <div className="flex flex-col justify-start text-center text-gray-100">
                            <span className="text-3xl font-semibold leadi tracki">04</span>
                            <span className="leadi uppercase">Aug</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline text-gray-100"> 
                        World leaders face escalating calls for decisive action on climate change</a>
                    </h2>
                </div>
                <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500" style={{ backgroundImage: `url("https://i.ibb.co/wrNx6G6/health.webp")`}}>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline text-gray-100 bg-violet-600">Health</a>
                        <div className="flex flex-col justify-start text-center text-gray-100">
                            <span className="text-3xl font-semibold leadi tracki">01</span>
                            <span className="leadi uppercase">Aug</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline text-gray-100">Resilient individuals inspire with their triumph over health challenges</a>
                    </h2>
                </div>
                <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500" style={{ backgroundImage: `url("https://i.ibb.co/zmxtRcC/Science.jpg")`}}>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline text-gray-100 bg-violet-600">Science</a>
                        <div className="flex flex-col justify-start text-center text-gray-100">
                            <span className="text-3xl font-semibold leadi tracki">28</span>
                            <span className="leadi uppercase">Jul</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline text-gray-100"> Scientific breakthroughs ignite curiosity and inspire a quest for knowledge</a>
                    </h2>
                </div>
                <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500" style={{ backgroundImage: `url("https://i.ibb.co/2SMgkh9/sports.webp")`}}>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline text-gray-100 bg-violet-600">Sports</a>
                        <div className="flex flex-col justify-start text-center text-gray-100">
                            <span className="text-3xl font-semibold leadi tracki">19</span>
                            <span className="leadi uppercase">Jul</span>
                        </div>
                    </div>
                    <h2 className="z-10 p-5">
                        <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline text-gray-100">The spirit of competition inspires not just victories but a celebration of diversity, sportsmanship, and the shared love for the game</a>
                    </h2>
                </div>
            </div>
    </div>
    );
};

export default Gallery;