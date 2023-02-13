import styles from "@/components/menu/menu.module.css";
import { Button } from "@/components/button/Button";
import { NavigationButton } from "@/components/button/NavigationButton";

type MenuItem = {
    active: boolean;
    label: string;
};

const menuItems: MenuItem[] = [
    {
        label: "Dashboard",
        active: true,
    },
    {
        label: "Wallets",
        active: false,
    },
    {
        label: "Settings",
        active: false,
    },
    {
        label: "Help & Center",
        active: false,
    },
];

export function MainNavigation() {
    return (
        <nav className={`${styles.navigation}`}>
            <ul className={"list-none p-0 flex"}>
                {menuItems.map(({ label, active}) => (
                    <li key={label}>
                        <NavigationButton label={label} active={active}/>
                    </li>
                ))}
            </ul>
        </nav>
    );
}