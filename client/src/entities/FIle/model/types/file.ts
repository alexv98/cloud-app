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
  showModal: boolean
  error?: string
  isLoading?: boolean
  dirStack: CurrentDir[]
}

export interface IDir {
  name: string
  type: 'dir'
  parent: string
}

export interface CurrentDir {
  id: string
  name?: string
}
