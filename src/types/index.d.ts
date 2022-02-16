export interface Gene {
    id: number,
    value: 'Y' | 'G' | 'H' | 'X' | 'W',
    color: 'primary' | 'secondary' | 'accent' | 'error' | 'info' | 'success' | 'warning',
    number: 0.6 | 1
}
export interface GeneSet {
    yValue: number,
    gValue: number,
    hValue: number,
    xValue: number,
    wValue: number
}
