import { pick } from 'lodash'

import { Listing } from '@full-stack-challenge/common'

export const filter = (allResults: Listing[], searchStr: string) =>
  allResults.filter(
    listing =>
      includesPartialMatch(partialMatchProps(listing), searchStr) ||
      includesExactMatch(exactMatchProps(listing), searchStr)
  )

type PartialMatchProps =
  | 'propertyType'
  | 'address'
  | 'municipality'
  | 'neighborhood'
const partialMatchPropKeys: PartialMatchProps[] = [
  'propertyType',
  'address',
  'municipality',
  'neighborhood'
]
const partialMatchProps = (listing: Listing) =>
  pick(listing, ...partialMatchPropKeys) as Pick<Listing, PartialMatchProps>

type ExactMatchProps = 'region' | 'mls'
const exactMatchPropKeys: ExactMatchProps[] = ['region', 'mls']
const exactMatchProps = (listing: Listing) =>
  pick(listing, exactMatchPropKeys) as Pick<Listing, ExactMatchProps>

const includesPartialMatch = (
  searchedProps: Record<string, string>,
  searchStr: string
) =>
  Object.values(searchedProps).some(item =>
    item.trim().toLowerCase().includes(searchStr.toLowerCase())
  )

const includesExactMatch = (
  searchedProps: Record<string, string>,
  searchStr: string
) =>
  Object.values(searchedProps).some(
    item => item.trim().toLowerCase() === searchStr.toLowerCase()
  )
