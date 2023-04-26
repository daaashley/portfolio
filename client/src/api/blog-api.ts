import { IPost } from "../types";
import { request } from "./utils";

export const getPost = async (post: IPost, retry: boolean = false) => {
    return request("GET", `/api/posts/${post.id}`, {}, retry);
};

export const getPosts = async (retry: boolean = false) => {
    return request("GET", `/api/posts`, {}, retry);
};

export const createPost = async (post: Partial<IPost>, retry: boolean = false) => {
    const body = {
        title: post.title,
        date: post.date,
        author: post.author,
        imageUrl: post.imageUrl,
        body: post.body,
    };
    return request("POST", `/api/posts`, body, retry);
};

export const updatePost = async (
    uuid: string,
    post: Partial<IPost>,
    retry: boolean = false
) => {
    return request("PUT", `/api/posts/${uuid}/update`, post, retry);
};

export const deletePost = async (id: string) => {
    return request("DELETE", `/api/posts/${id}/delete`, {});
};
