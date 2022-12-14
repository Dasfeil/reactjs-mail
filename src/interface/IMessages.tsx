export default interface IMessages {
    folder: string
    body: string
    subject: string
    from: string
    to: string
    date: string
    senderName: {last: string; first: string}
    corpus: string
    _id: string
    [key: string]: string | object
}