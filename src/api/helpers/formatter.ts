
export function formatMessage (msgType: string, msgName: string, msgDescription: string): string {
    return ( `
        Type: ${msgType}\n
        Name: ${msgName}\n
        Description: ${msgDescription}
    `);
}