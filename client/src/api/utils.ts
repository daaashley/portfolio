import axios from "axios";
import axiosRetry from "axios-retry";

export const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

// Recursive type
type RequestData = {
    [key: string]: string | number | Date | RequestData;
};

type HeadersType = { [key: string]: string };

export const request = async (
    method: string,
    url: string,
    data: RequestData | FormData,
    retry: boolean = false,
    headers: HeadersType = defaultHeaders,
    params: URLSearchParams = null
) => {
    axiosRetry(
        axios,
        retry ? { retryDelay: axiosRetry.exponentialDelay, retries: 5 } : { retries: 0 }
    );
    return axios({
        method: method,
        url: url,
        data: data,
        headers: headers,
        params: params,
    })
        .then((response: any) => {
            return { data: response.data, error: false, errorMessage: null };
        })
        .catch((error: any) => {
            return {
                data: null,
                error: true,
                errorMessage: error.response.data.detail || "Undefined Error",
            };
        });
};
