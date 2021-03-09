export interface Nas{
    label: string,
    address: string
}

export interface FileSetting {
    root: string,
    usenas: boolean,
    nas:Array<Nas>
}