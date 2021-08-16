export class ClientDecodeError extends Error {
  type = 'ClientDecodeError::Error'
  constructor(public readonly cause: unknown) {
    super("Could not understand the server's response. Sorry!")
  }
}

export class NetworkError extends Error {
  type = 'NetworkError::Error'
  constructor(public readonly cause: unknown) {
    super(
      'Could not resolve network request. Check your connection and try again.'
    )
  }
}

export class ServerError extends Error {
  type = 'ServerError::Error'
  constructor(public readonly cause: unknown) {
    super('An unexpected error occurred. Sorry!')
  }
}
