import { ReactNode } from "react"

export interface Bubble2 {
    children?: ReactNode;
    size?: number;
    className?: string;
    textClassName?: string;
}
export function Bubble2({ children, size, className = "", textClassName = "" }: Bubble2) {
    return <div className={`relative ${className} w-fit`}>
        <svg width={size} height={size} viewBox="0 0 326 326" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.4754 184.947C36.5896 109.992 74.6713 45.5322 129.126 39.4248C183.576 33.3175 249.015 71.1702 274.871 122.43C300.664 173.456 262.582 237.916 190.221 267.958C117.865 297.994 52.425 260.136 44.4754 184.947Z" fill="url(#paint0_linear_277_64965)" />
            <path d="M82.5089 71.8023C144.231 28.5501 219.072 30.5865 250.826 75.2445C282.577 119.898 281.216 195.484 248.931 242.959C216.819 290.264 141.979 288.227 80.6092 239.519C19.247 190.813 20.6127 115.224 82.5089 71.8023Z" fill="url(#paint1_linear_277_64965)" />
            <defs>
                <linearGradient id="paint0_linear_277_64965" x1="163.193" y1="38.7778" x2="163.193" y2="278.282" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C1121F" />
                    <stop offset="1" stopColor="#6C151C" />
                </linearGradient>
                <linearGradient id="paint1_linear_277_64965" x1="267.915" y1="104.722" x2="58.4713" y2="220.891" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C1121F" />
                    <stop offset="1" stopColor="#6C151C" />
                </linearGradient>
            </defs>
        </svg >
        <div className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${textClassName}`}>{children}</div>
    </div>
}
