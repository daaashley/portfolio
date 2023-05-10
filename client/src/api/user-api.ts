import { request } from "./utils";

export const loginUser = async (
    username: string,
    password: string,
    retry: boolean = false
) => {
    const form_data: FormData = new FormData();
    form_data.append("username", username);
    form_data.append("password", password);
    return request("POST", `/api/token`, form_data, retry, {
        Accept: "multipart/form-data",
        "Content-Type": "multipart/form-data",
    });
};
