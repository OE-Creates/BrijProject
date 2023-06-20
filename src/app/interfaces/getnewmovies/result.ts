import { OriginalTitleText } from "./originaltitletext"
import { PrimaryImage } from "./primaryimage"
import { ReleaseDate } from "./releasedate"
import { ReleaseYear } from "./releaseyear"
import { TitleText } from "./titletext"
import { TitleType } from "./titletype"

export interface Result {
    _id: string
    id: string
    primaryImage?: PrimaryImage
    titleType: TitleType
    titleText: TitleText
    originalTitleText: OriginalTitleText
    releaseYear: ReleaseYear
    releaseDate: ReleaseDate
  }