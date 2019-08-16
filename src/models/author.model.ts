import { IPost } from "./post.model";

export interface IAuthor{
    id: string;
    name: string;
    email: string;
    date_birth: Date;

    posts: IPost[];
}