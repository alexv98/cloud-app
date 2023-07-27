import { useCallback, useState, type FC } from 'react'
import AuthLogin from './AuthLogin'
import AuthReg from './AuthReg'

const AuthPage: FC = () => {
	const [isRegistrationMode, setIsRegistrationMode] = useState(false)

	const isRegistrationHandler = useCallback(() => {
		setIsRegistrationMode(!isRegistrationMode)
	}, [isRegistrationMode])

	if (!isRegistrationMode) {
		return <AuthLogin regModeHandler={isRegistrationHandler} />
	}

	return <AuthReg regModeHandler={isRegistrationHandler} />
}

export default AuthPage
