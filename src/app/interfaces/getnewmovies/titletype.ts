import { Category } from "./category"
import { DisplayableProperty } from "./displayableproperty"

export interface TitleType {
    displayableProperty: DisplayableProperty
    text: string
    id: string
    isSeries: boolean
    isEpisode: boolean
    categories: Category[]
    canHaveEpisodes: boolean
    __typename: string
  }