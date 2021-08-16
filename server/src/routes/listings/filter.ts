import { pick } from 'lodash'

import { Listing } from '@full-stack-challenge/common'

export const filter = (allResults: Listing[], searchStr: string) =>
  allResults.filter(
    listing =>
      includesPartialMatch(partialMatchProps(listing), searchStr) ||
      includesExactMatch(exactMatchProps(listing), searchStr)
  )

const partialMatchProps = (listing: Listing) =>
  pick(
    listing,
    'propertyType',
    'address',
    'municipality',
    'neighborhood'
  ) as Pick<
    Listing,
    'propertyType' | 'address' | 'municipality' | 'neighborhood'
  >

const exactMatchProps = (listing: Listing) =>
  pick(listing, 'region', 'mls') as Pick<Listing, 'region' | 'mls'>

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
