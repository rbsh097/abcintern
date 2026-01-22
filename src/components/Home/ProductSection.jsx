export default function ProductSection() {
    return (
        <div className="bg-white py-10">
            <div className="container mx-auto flex flex-col lg:flex-row gap-8 px-4 lg:px-0">

                {/* LEFT CONTENT */}
                <div
                    className="
                        w-full lg:w-1/2
                        flex flex-col items-center justify-center text-black
                        bg-gradient-to-r from-[#fae57f] via-white to-[#fae57f]
                        p-6 lg:p-8 rounded-[2rem]
                        text-center
                    "
                    style={{
                        backgroundImage: 'url(/BG.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h1 className="text-2xl sm:text-3xl lg:text-[3rem] font-bold leading-tight">
                        <span className="text-gray-500 hover:text-[#ea9237]">
                            Quality Healthcare
                        </span>{" "}
                        Products with Trusted Medical Care Partners
                    </h1>

                    <div className="mt-4 space-y-2">
                        <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl">
                            ABC International works with the best partners across the globe
                        </p>
                        <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl">
                            Having over “600” quality brands working together with us, here are some of our international partners.
                        </p>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <img
                        src="/Partners.png"
                        alt="Partners"
                        className="w-full max-w-md lg:max-w-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
