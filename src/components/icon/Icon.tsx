import Image from "next/image";
import classnames from "classnames";

import "./icon.css";

type Props = {
    width: number;
    height: number;
    name: string;
    hasBackground?: boolean;
};

export function Icon({ width, height, name, hasBackground = true}: Props) {
    return (
        <div className={classnames("icon-wrapper flex justify-center items-center", {background: hasBackground})}>
            <Image src={`/images/${name}.svg`} alt="Menu icon" width={width} height={height}/>
        </div>
    );
}