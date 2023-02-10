import "./title.css";

type Props = {
    label: string;
};

export function Title({ label}: Props) {
    return (
        <h1 className={"title"}>{label}</h1>
    );

}