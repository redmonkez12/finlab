import "./button.css";
import { ReactNode } from "react";

type Props = {
    type?: "submit" | "reset" | "button";
    label: string;
    icon?: ReactNode;
};

export function Button({ type = "button", label, icon }: Props) {
    return (
        <button className={"button flex items-center"} type={type}>
            {icon && icon}
            <span>{label}</span>
        </button>
    );
}
