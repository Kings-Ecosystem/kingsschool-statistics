
export interface ResponsePayload {
    status: number;
    message: string;
    data?: [] | {},
    platform: {
        type: string,
        actionEvent: string
    };
}