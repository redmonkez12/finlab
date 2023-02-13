import classnames from "classnames";

import styles from "./navigationButton.module.css";

type Props = {
    label: string;
    active: boolean;
};

export function NavigationButton({ label, active }: Props) {
    return (
        <button className={classnames(`${styles.navigation} flex items-center`, { [styles.active]: active })} type={"button"}>
            <span>{label}</span>
        </button>
    );
}