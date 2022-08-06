export interface BasicError {
  message: string
  stack?: string
}

export interface IResponse<Data = any> {
  data?: Data | null
  error?: Error | null
}

export interface ApiResponseSuccess<Data = any> extends IResponse<Data> {
  data: Data
  error?: null
}

export interface ApiResponseFailure extends IResponse<any> {
  error: Error
  data?: null
}

export interface ApiResponseRequesting extends IResponse<any> {
  data?: undefined
  error?: undefined
}

export type ApiResponse<Data = any> =
  | ApiResponseRequesting
  | ApiResponseSuccess<Data>
  | ApiResponseFailure
