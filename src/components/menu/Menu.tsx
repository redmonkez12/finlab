import { Icon } from "@/components/icon/Icon";
import "./menu.css";


export function Menu() {
    return (
        <div className={"flex p-6"}>
            <Icon height={22} width={22} name={"menu"}/>
        </div>
    );
}