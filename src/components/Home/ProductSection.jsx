
export default function ProductSection() {
    return (
        <>
            <div className="bg-white py-10 px-8">
                <div className="container mx-auto flex flex-row gap-8">
                    <div className="w-1/2 flex flex-col items-center justify-center text-black bg-gradient-to-r from-[#fae57f] via-white to-[#fae57f] p-6 rounded-[2rem]"
                        style={{ backgroundImage: 'url(/BG.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div>
                            <h1 className="text-[3rem] font-bold text-center leading-[1]">
                                <span className="text-gray-500 text-[3rem] leading-[1] hover:text-[#ea9237]"> Quality Healthcare</span>  Products
                                with Trusted Medical Care Partners
                            </h1>
                            <div className="text-center mt-4">
                                <p className="text-lg">
                                    ABC International works with the best partners across the globe

                                </p>
                                <p className="text-lg">
                                    Having over “600” quality brands working together with us, here are some of our international partners working together with us.
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="w-1/2 flex flex-col">
                        <img src="/Partners.png" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}