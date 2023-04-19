import { IPost } from "../types";
import { request } from "./utils";

export const getPost = async (post: IPost, retry: boolean = false) => {
    return request("GET", `/post/${post.id}`, {}, retry);
};

export const getPosts = async (retry: boolean = false) => {
    return request("GET", `/posts`, {}, retry);
};

export const createPost = async (post: IPost, retry: boolean = false) => {
    const body = {
        title: post.title,
        date: post.date,
        imageUrl: post.imageUrl,
        body: post.body,
    };
    return request("POST", `/post`, body, retry);
};

export const updatePost = async (post: Partial<IPost>, retry: boolean = false) => {
    return request("PUT", `/post/${post.id}`, post, retry);
};

export const deletePost = async (id: string) => {
    return request("DELETE", `/post/${id}`, {});
};
