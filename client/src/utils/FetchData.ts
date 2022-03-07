import axios, { AxiosRequestHeaders } from "axios";

export const postAPI =async (url: string, post: object, token?: string) => {
    let headers: AxiosRequestHeaders = {}
    if(token) {
        headers['Authorization'] = token
    }

    const res = await axios.post(`http://localhost:5000/api/${url}`, post, {
        headers: headers,
        withCredentials:true
    })

    return res;
}

export const getAPI =async (url: string, token?: string) => {
    let headers: AxiosRequestHeaders = {}
    if(token) {
        headers['Authorization'] = token
    }

    const res = await axios.get(`http://localhost:5000/api/${url}`, {
        headers: headers,
        withCredentials:true
    })

    return res;
}

export const patchAPI =async (url: string, post: object, token?: string) => {
    let headers: AxiosRequestHeaders = {}
    if(token) {
        headers['Authorization'] = token
    }

    const res = await axios.patch(`http://localhost:5000/api/${url}`, post, {
        headers: headers,
        withCredentials:true
    })

    return res;
}

export const deleteAPI =async (url: string, token?: string) => {
    let headers: AxiosRequestHeaders = {}
    if(token) {
        headers['Authorization'] = token
    }

    const res = await axios.delete(`http://localhost:5000/api/${url}`, {
        headers: headers,
        withCredentials:true
    })

    return res;
}