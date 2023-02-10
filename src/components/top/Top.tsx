import {ReactNode} from "react";

import "./top.css";

type Props = {
    children: ReactNode;
};

export function Top({ children }: Props) {
    return (
        <div className={"top"}>{children}</div>
    );
}