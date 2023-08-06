export type FileType = 'dir' | string

export interface IFile {
  _id: string
  name: string
  type: FileType
  access_link?: string
  path: string
  date: Date
  size: number
  user: string
  parent: string
}

export interface FileSchema {
  data: IFile[]
  currentDir?: string
  showModal: boolean
  error?: string
  isLoading?: boolean
}

export interface IDir {
  name: string
  type: 'dir'
  parent: string
}
