import { CSSProperties } from 'react'

export type Styles = CSSProperties
export type StyleMap<T extends string | number | symbol = string> = {
  [K in T]: StyleMap | Styles
}
