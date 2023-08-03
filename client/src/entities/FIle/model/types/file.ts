export type FileType = 'dir' | string

export interface IFile {
  id: string
  name: string
  type: FileType
  access_link: string
  path: string
  date: Date
  size: number
  user: string
  parent?: string
}

export interface FileSchema {
  data?: IFile[]
  currentDir?: string
  error?: string
  isLoading?: boolean
}
