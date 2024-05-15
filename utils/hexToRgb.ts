// utils/hexToRgb.ts
export default function hexToRgb(hex: string): string {
    // Remove '#' if present
    hex = hex.replace(/^#/, '');

    // Parse hex into R, G, B values
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
}
