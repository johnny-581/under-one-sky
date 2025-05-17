import React, { ReactNode } from 'react';
import Image from 'next/image';

import bottomSvg from "@/data/bottom.svg";
import middleSvg from "@/data/middle.svg";
import topSvg from "@/data/top.svg";

type LayeredBoxProp = {
    children: ReactNode;
};

function LayeredBox({ children }: LayeredBoxProp) {
    return (
        <div className='relative w-full aspect-[1107/228] min-w-[700px]'>
            {/* Layer 1: Bottom (Red) */}
            <div className="absolute w-full aspect-[1107/228]">
                <Image
                    src={bottomSvg}
                    alt=""
                    fill
                    priority
                    style={{ objectFit: "fill" }}
                />
            </div>

            {/* Layer 2: Middle (Yellow) */}
            <div className="absolute w-[99%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] aspect-[1099/221] z-20">
                <Image
                    src={middleSvg}
                    alt=""
                    layout="fill"
                    className="object-fill"
                />
            </div>

            {/* Layer 3: Top (White Background) */}
            <div className="absolute w-[97%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-41%] aspect-[1073/226] z-30">
                <Image
                    src={topSvg}
                    alt=""
                    layout="fill"
                    className="object-fill"
                />
            </div>

            {/* Layer 4: Content */}
            <div className="absolute w-[70%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-25%] z-40">
                {children}
            </div>
        </div>
    );
}

export default LayeredBox;