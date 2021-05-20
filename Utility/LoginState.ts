/**
 * Login result
 */
export enum LoginState{
	/**
	 * Successfully login
	 */
	Pass = 0,
	/**
	 * Find that username does not exist
	 */
	UsernameDoesNotExist = 1,
	/**
	 * Username pass but password is incorrect
	 */
	PasswordIncorrect = 2,
	/**
	 * All pass but account is blocked currently
	 */
	Block = 3,
	/**
	 * All pass but someone is use the account right now
	 */
	AlreadyLogin = 4,
}