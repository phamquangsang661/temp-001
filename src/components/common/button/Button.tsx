import { ReactNode } from "react";

export interface Button {
    className?: string;
    textClassName?: string;
    children: ReactNode;
    onClick?: () => void;
    props?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}
export function Button({ className = "", textClassName = "", children, onClick = () => { }, props }: Button) {
    return <button  {...props}
        onClick={onClick}
        className={`bg-primary-main hover:bg-primary-dark active:bg-primary-light transition duration-500 ease-in-out transition-500 rounded-full ${className}`}>
        <p className={`text-primary-contrast text-[17px] leading-[21px] font-medium text-center ${textClassName}`}>{children}</p>
    </button>
}