export { getLoginEmail } from './model/selectors/loginSelectors/getLoginEmail/getLoginEmail'
export { getLoginPassword } from './model/selectors/loginSelectors/getLoginPassword/getLoginPassword'
export { getRegEmail } from './model/selectors/regSelectors/getRegEmail/getRegEmail'
export { getRegLastname } from './model/selectors/regSelectors/getRegLastname/getRegLastname'
export { getRegName } from './model/selectors/regSelectors/getRegName/getRegName'
export { getRegPassword } from './model/selectors/regSelectors/getRegPassword/getRegPassword'
export { login } from './model/services/login'
export { registration } from './model/services/reg'
export { loginActions, loginReducer } from './model/slice/loginSlice'
export { regActions, regReducer } from './model/slice/regSlice'
export type { LoginSchema, RegSchema } from './model/types/loginSchema'
