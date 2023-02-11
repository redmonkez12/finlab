import { ReactNode } from "react";
import { Icon } from "@/components/icon/Icon";
import Image from "next/image";

import "./card.css";

type Props = {
    title: string;
    action: ReactNode;
    children: ReactNode;
};

export function Card({ title, action, children }: Props) {
    return (
        <div className={"card p-6 flex flex-col"}>
            <div className={"flex items-center top-card"}>
                <div className={"flex items-center h-full"}>
                    <div className={"card-title text-base"}>{title}</div>
                    <Icon name={"info-circle"} height={18} width={18}/>
                </div>

                <div className={"ml-auto"}>
                    {action}
                </div>
            </div>

            <div className="balance flex items-center">
                <div className={"balance font-bold"}>$12,456,315</div>
                <Image className={"self-start"} src={`/images/eye.svg`} alt="Menu icon" width={18} height={18}/>
            </div>

            <div className={"flex items-center"}>
                {children}
            </div>
        </div>
    );
}