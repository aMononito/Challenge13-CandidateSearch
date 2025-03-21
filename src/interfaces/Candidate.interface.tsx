// TODO: Create an interface for the Candidate objects returned by the API

// export default interface Candidate {
//     readonly Name: string;
//     readonly Username: string;
//     readonly Avatar: string;
//     readonly Email: string;
//     readonly Html_url: string;
//     readonly Company: string;
//     readonly Location: string;
// }

export default interface Candidate {
    readonly name: string;
    readonly username: string;
    readonly avatar: string;
    readonly email: string;
    readonly htmlUrl: string;
    readonly company?: string | null;
    readonly location?: string | null;
}
