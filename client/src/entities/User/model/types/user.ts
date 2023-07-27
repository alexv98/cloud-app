export interface IUser {
	token: string
	id: string
	email: string
	name: string
	lastname: string
	diskSpace: string
	userSpace: string
	files: string[]
	avatar?: string
}

export interface UserSchema {
	data?: IUser
	isAuth?: boolean
}
