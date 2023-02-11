import Image from "next/image";
import classNames from "classnames";

import "./breadcrumbs.css";

export type BreadcrumbItem = {
    label: string;
    active: boolean;
};

type Props = {
    items: BreadcrumbItem[]
};

export function Breadcrumbs({ items }: Props) {
    return (
        <div className={"flex items-center breadcrumbs mt-3 gap-3"}>
            {items.map(({ label, active }, index) => (
                <>
                    <div key={label} className={classNames({active})}>{label}</div>
                    {(index !== items.length - 1) &&
                        <Image width={12} height={12} src={"/images/arrow-right.svg"} alt={"arrow"}/>}
                </>
            ))}
        </div>
    );
}
