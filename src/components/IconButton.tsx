interface IIconButtonProps {
    alt: string;
    iconPath: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function IconButton({ iconPath, onClick, alt }: IIconButtonProps) {
    return (
        <button onClick={onClick}>
            <img src={iconPath} alt={alt} />
        </button>
    );
}
