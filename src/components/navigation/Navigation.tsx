import classNames from "classnames";

import { Icon } from "@/components/icon/Icon";

import "./navigation.css";

export type NavigationItem = {
    label: string;
    active: boolean;
};

type Props = {
    items: NavigationItem[];
};

export function Navigation({ items }: Props) {
    return (
        <div className={"navigation flex items-center gap-2"}>
            {items.map(({ label, active }) => (
                <div key={label} className={classNames({active})}>{label}</div>
            ))}
            <span className={"ml-auto"}>
                <Icon width={22} height={22} name={"calendar"}/>
            </span>
        </div>
    );
}