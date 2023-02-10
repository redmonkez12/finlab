import classNames from "classnames";

import { Icon } from "@/components/icon/Icon";

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
        <div className={"flex items-center breadcrumbs mt-3"}>
            {items.map(({ label, active }, index) => (
                <>
                    <div key={label} className={classNames({active})}>{label}</div>
                    {(index !== items.length - 1) &&
                        <Icon width={12} height={12} name={"arrow-right"} hasBackground={false}/>}
                </>
            ))}
        </div>
    );
}
