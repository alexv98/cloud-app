import { useSelector } from 'react-redux'
import { getDirStack } from 'entities/FIle/model/selectors/getDirStack/getDirStack'

export const useGetCurrentDir = () => {
  const dirStack = useSelector(getDirStack)
  const currentDir = dirStack[dirStack.length - 1]

  return { dirStack, currentDir }
}
