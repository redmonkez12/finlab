import Image from "next/image";

import "./icon.css";

type Props = {
    width: number;
    height: number;
    name: string;
};

export function Icon({ width, height, name }: Props) {
    return (
        <div className="icon-wrapper flex justify-center items-center">
            <Image src={`/images/${name}.svg`} alt="Menu icon" width={width} height={height}/>
        </div>
    );
}