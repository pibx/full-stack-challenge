import {
  ListingSuccessMessageC,
  ErrorMessageC,
  decode
} from '@full-stack-challenge/common'

import { ClientDecodeError, ServerError, NetworkError } from './errors'

export interface ListingsGetParams {
  searchStr: string
}

/** @throws DecodeError, NetworkError, ServerError */
export class ListingsClient {
  constructor(private apiPath: string) {}

  async get(params: ListingsGetParams) {
    const queryString = new URLSearchParams(
      params as unknown as Record<string, string>
    ).toString()
    let response: Response
    try {
      response = await window.fetch(`${this.apiPath}/listings?${queryString}`, {
        mode: 'cors'
      })
    } catch (error) {
      console.error(error)
      throw new NetworkError(error)
    }

    if (response.ok) {
      const json = await response.json()
      try {
        return decode(ListingSuccessMessageC, json).data
      } catch (error) {
        console.error(error, json)
        throw new ClientDecodeError(error)
      }
    } else {
      const json = await response.json()
      try {
        const message = decode(ErrorMessageC, json).error
        console.error('ServerError:', message)
        throw new ServerError(message)
      } catch (error) {
        console.error(error, json)
        throw new ClientDecodeError(error)
      }
    }
  }
}
