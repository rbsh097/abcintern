import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ArticleCardProps {
    image: string;
    date: string;
    title: string;
    href: string;
}

const ArticleCard = ({ image, date, title, href }: ArticleCardProps) => {
    return (
        <div className="bg-[#f7f7f7] rounded-2xl overflow-hidden flex flex-col h-full">
            {/* Image */}
            <div className="relative w-full h-[260px]">
                <img
                    src={image}
                    alt={title}
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-gray-500 mb-6">
                    {date} &nbsp; <span className="underline">Blog</span>
                </p>

                <h3 className="text-lg font-medium text-gray-900 leading-snug mb-6">
                    {title}
                </h3>

                <div className="mt-auto">
                    <a
                        href={href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-sm font-medium text-gray-900 hover:bg-black hover:text-white transition-all"
                    >
                        View More
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
