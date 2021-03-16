export interface ManagementPageRequest{
    channelType: number,
    page: number,
    length: number,
    sort: Array<string>,
    filter: Array<string>,
}