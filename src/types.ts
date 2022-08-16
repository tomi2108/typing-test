export enum LetterStatus{
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    ERROR = "ERROR",
}

export interface Counter {
    index: number;
    value:string
}