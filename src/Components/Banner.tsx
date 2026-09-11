import banner from "../assets/banner-stack.png"
const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto md:py-24 md:px-10 px-6
         py-5 gap-12">
            <div>
                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
                    Build Your Ideal
                    <br/>
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent"> Development Stack</span> 
                   
                </h1>
                <p className=" mt-5 max-w-md text-gray-500 leading-relaxed text-sm md:text-base">
                    Explore frontend,database,and tooling options,comparre them side by side,and put together the stack that fits yours next project.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                    <button className=" btn btn-sm md:btn-md rounded-md border-none px-6 text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90">
                        Explore Technologies
                    </button>
                    <button className="btn btn-sm md:btn-md  border border-gray-300 text-gray-700 px-6  btn-outline rounded-md hover:bg-gray-100">
                        Learn More
                    </button>
                </div>
                
            </div>
            <div>
                <img src={banner} alt="Banner" className="w-full max-w-md" />
            </div>
        </div>
    );
};

export default Banner;