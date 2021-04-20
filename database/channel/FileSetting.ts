export class Nas{
    label: string = ""
    address: string = ""
}

export class FileSetting {
    root: string = ""
    usenas: boolean = false
    nas:Array<Nas> = []

    realBookmark:Array<string> = []
    virtualBookmark: Array<string> = []
}