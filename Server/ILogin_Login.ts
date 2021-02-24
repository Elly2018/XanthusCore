import { IBase } from "../IBase";
/**
 * Server receiver message\
 * User login attempting
 * @param username Input username
 * @param password Input password
 */
export interface ILoginLogin extends IBase {
    username: string,
    password: string
}