import { Icon } from "@/components/icon/Icon";

import styles from "./menu.module.css";
import Image from "next/image";
import { Button } from "@/components/button/Button";
import { MainNavigation } from "@/components/mainNavigation/MainNavigation";


export function Menu() {
    return (
        <div className={"flex pb-6"}>
            <div className={`${styles.logo} gap-4 items-center`}>
                <Image src={`/images/logo.svg`} alt="Menu icon" width={38} height={38}/>
                <Image src={`/images/finlab.svg`} alt="Menu icon" width={78} height={21}/>
            </div>

            <MainNavigation/>

            <Icon height={22} width={22} name={"menu"} className={styles.hamburger}/>
            <div className={"flex ml-auto gap-2"}>
                <Icon height={22} width={22} name={"search-normal"}/>
                <Icon height={22} width={22} name={"notification"}/>
                <Icon height={30} width={30} name={"test-image"}/>
            </div>
        </div>
    );
}