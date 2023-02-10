import { Icon } from "@/components/icon/Icon";
import "./menu.css";


export function Menu() {
    return (
        <div className={"flex pb-4"}>
            <Icon height={22} width={22} name={"menu"}/>
            <div className={"flex ml-auto gap-2"}>
                <Icon height={22} width={22} name={"search-normal"}/>
                <Icon height={22} width={22} name={"notification"}/>
                <Icon height={30} width={30} name={"test-image"}/>
            </div>
        </div>
    );
}