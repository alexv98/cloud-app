import type React from 'react'

export interface DragDropFilesSchema {
  isDragEnter: boolean
}

export interface DragDropAction {
  event: React.DragEvent
  state: boolean
}
