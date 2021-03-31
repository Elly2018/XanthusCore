import { IFileURL } from './../database/element/IFileURL'

export interface FileStructure{
    target: IFileURL
    full: string
    urls: Array<FileStructure>
}

export interface RealFileStructure{
    target: string
    full: string
    urls: Array<RealFileStructure>
}