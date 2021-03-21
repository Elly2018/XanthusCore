import { IFileURL } from './../database/element/IFileURL'

export interface FileStructure{
    target: IFileURL
    urls: Array<FileStructure>
}

export interface RealFileStructure{
    target: string,
    urls: Array<RealFileStructure>
}