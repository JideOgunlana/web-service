export interface logLevelRequestBody {
    Type: string,
    Name: string,
    Description: string
}

export interface logLevelResponseBody {
    Type: string,
    Name: string,
    Description: string,
    Timestamp: undefined | number
}  