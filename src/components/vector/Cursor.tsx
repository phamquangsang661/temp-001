export interface Cursor {
    size?: number;
    className?: string;
}
export function Cursor({ size = 32, className = "" }: Cursor) {
    return <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0.138164 19.5293C-0.915436 9.51478 4.17258 0.902433 11.4482 0.0864439C18.7231 -0.729545 27.4663 4.32788 30.9209 11.1766C34.367 17.9941 29.279 26.6064 19.6109 30.6202C9.94355 34.6333 1.2003 29.5752 0.138164 19.5293Z"
            className={`fill-primary-main ${className}`} />
    </svg>

}