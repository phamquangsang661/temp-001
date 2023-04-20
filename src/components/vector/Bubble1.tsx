import { ReactNode } from "react"

export interface Bubble1 {
    children?: ReactNode;
    size?: number;
    className?: string;
    textClassName?: string;
}
export function Bubble1({ children, size, className = "", textClassName = "" }: Bubble1) {
    return <div className={`relative ${className} w-fit`}>
        <svg width={size} height={size} viewBox="0 0 447 447" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M60.0823 253.84C49.2498 151.19 101.562 62.9122 176.365 54.5482C251.16 46.1842 341.053 98.0234 376.571 168.224C412.001 238.104 359.69 326.381 260.289 367.523C160.895 408.658 71.0025 356.811 60.0823 253.84Z" fill="url(#paint0_linear_249_75299)" />
            <path d="M112.652 98.4952C197.32 39.1638 299.983 41.9572 343.541 103.217C387.096 164.471 385.229 268.157 340.942 333.28C296.893 398.171 194.23 395.377 110.046 328.562C25.8719 261.749 27.7453 158.059 112.652 98.4952Z" fill="url(#paint1_linear_249_75299)" />

            <defs>
                <linearGradient id="paint0_linear_249_75299" x1="223.162" y1="53.6621" x2="223.162" y2="381.662" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C1121F" />
                    <stop offset="1" stopColor="#AB1722" />
                </linearGradient>
                <linearGradient id="paint1_linear_249_75299" x1="366.984" y1="143.653" x2="79.678" y2="303.009" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D51826" />
                    <stop offset="1" stopColor="#941A23" />
                </linearGradient>
            </defs>
        </svg >
        <div className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${textClassName}`}>{children}</div>
    </div>

}
