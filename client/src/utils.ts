export const getToken = () => {
    return localStorage.getItem("access_token");
};

export const setToken = (accessToken: string, tokenType: string) => {
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("token_type", tokenType);
};

export const clearToken = () => {
    localStorage.clear();
    location.reload();
};
