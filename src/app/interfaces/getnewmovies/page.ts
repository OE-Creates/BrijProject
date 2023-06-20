import { Result } from "./result"

export interface Page {
    page: number
    next: string
    entries: number
    results: Result[]
  }