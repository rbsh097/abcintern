import Image from 'next/image';

export default function ProductCard({ product }) {
    return (
        <div className="group bg-[#f0f9ff]/50  rounded-3xl p-6 transition-all duration-300 border-2 border-transparent hover:border-[#ea9237]/20 cursor-pointer">
            <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden  flex items-center justify-center">
                <div className="relative w-full h-full">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain opacity-100 transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <Image
                        src={product.image2}
                        alt={product.title}
                        fill
                        className="object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>
            </div>

            <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#fae57f] transition-colors">
                {product.title}
            </h3>

            <p className="text-gray-500 leading-relaxed line-clamp-2">
                {product.description}
            </p>
        </div>
    );
}
