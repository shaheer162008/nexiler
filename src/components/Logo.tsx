import Link from "next/link";

export const Logo = ({ className = "" }: { className?: string }) => {
    return (
        <Link href="/" className={`flex items-center gap-0.5 ${className}`}>
            {/* Text Logo Image - First (Left) - Bigger */}
            <div className="h-11 md:h-14 flex items-center max-w-sm">
                <img
                    src="/virtuo-edge_logo.png"
                    alt="Virtuo Edge Text"
                    className="h-full object-contain object-left"
                    loading="eager"
                />
            </div>
            
            {/* Icon Logo - Second (Right) - Moved Left */}
            <div className="h-[15px] md:h-[15px] w-[115px] md:w-[115px] flex-shrink-0 flex items-center justify-center -ml-5 md:-ml-4">
                <img
                    src="/virtuo-edge.png"
                    alt="Virtuo Edge Icon"
                    className="w-full h-full object-contain"
                    loading="eager"
                />
            </div>
        </Link>
    );
};
