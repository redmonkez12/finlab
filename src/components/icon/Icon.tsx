import Image from "next/image";
import classnames from "classnames";

import "./icon.css";

type Props = {
    width: number;
    height: number;
    name: string;
    hasBackground?: boolean;
    className?: string;
};

export function Icon({ width, height, name, hasBackground = true, className = "" }: Props) {
    return (
        <div
            className={classnames(`icon-wrapper flex justify-center items-center ${className}`, { background: hasBackground })}>
            <Image src={`/images/${name}.svg`} alt="Menu icon" width={width} height={height}/>
        </div>
    );
}