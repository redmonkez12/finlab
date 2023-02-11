import { ReactNode } from "react";
import {Icon} from "@/components/icon/Icon";
import Image from "next/image";

import "./card.css";

type Props = {
    title: string;
    action: ReactNode;
};

export function Card({ title, action }: Props) {
    return (
        <div className={"card p-6"}>
            <div className={"flex items-center"}>
                <div className={"flex items-center"}>
                    <div className={"card-title font-semibold text-base"}>{title}</div>
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
        </div>
    );
}