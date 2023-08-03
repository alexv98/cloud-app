export interface LoginSchema {
  email: string
  password: string
  isLoading: boolean
  error?: string
}

export interface RegSchema extends LoginSchema {
  name: string
  lastname: string
}
