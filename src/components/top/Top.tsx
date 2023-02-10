import {ReactNode} from "react";

import "./top.css";

type Props = {
    children: ReactNode;
};

export function Top({ children }: Props) {
    return (
        <header className={"top flex flex-col gap-8 p-6"}>{children}</header>
    );
}