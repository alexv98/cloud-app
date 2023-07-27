export interface LoginSchema {
	email: string
	password: string
	isLoading: boolean
	error?: string
}

export interface RegSchema {
	name: string
	lastname: string
	email: string
	password: string
	isLoading: boolean
	error?: string
}
