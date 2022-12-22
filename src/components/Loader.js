export default function Loader({ size }) {
    return <span dangerouslySetInnerHTML={{
        __html: `
            <svg height="${size}" viewBox="0 0 32 32":width="${size}" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <circle class="stroke-current" cx="16" cy="16" fill="none" r="14" stroke-width="4" style="opacity: 0.2;"></circle>
                </g>
                <g class="circle__svg-circle">
                    <circle class="stroke-current" cx="16" cy="16" fill="none" r="14" stroke-width="4" style="stroke-dasharray: 80px; stroke-dashoffset: 60px;"></circle>
                </g>
            </svg>
        `}
    } />
}