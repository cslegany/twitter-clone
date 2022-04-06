import { FieldValue } from "firebase/firestore";

export interface IProvider {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
}

export interface ITrendingResult {
    heading: string;
    description: string;
    img: string;
    tags: string[];
}

export interface IFollowResult {
    tag: string;
    userImg: string;
    username: string;
}
export interface IPostData {
    id: string;
    tag: string;
    text: string;
    timestamp: FieldValue;
    userImg: string;
    username: string;
    image?: string;
}

export interface IPost {
    id: string;
    data: () => IPostData;
}

export interface ICommentData {
    comment: string;
    tag: string;
    timestamp: FieldValue;
    userImg: string;
    username: string;
}

export interface IComment {
    id: string;
    data: () => ICommentData;
}

export interface ILikeData {
    username: string;
}

export interface ILike {
    id: string;
    data: () => ILikeData;
}