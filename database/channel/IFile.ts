export interface Nas{
    label: string,
    address: string
}

export interface FileSetting {
    root: string,
    use_nas: boolean,
    nas:Array<Nas>
}