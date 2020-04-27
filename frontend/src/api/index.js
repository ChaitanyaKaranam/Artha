import axios from 'axios';
import { BACKEND_URL } from '../config';

export const searchYoutube = async(query) => {
    return await axios.get(`${BACKEND_URL}/api/youtube/search?q=${query}`)
}

export const videoData = async (id) => {
    return await axios.get(`${BACKEND_URL}/api/youtube/videos?id=${id}`)
}

export const channelData = async (channelId) => {
    return await axios.get(`${BACKEND_URL}/api/youtube/channels?channelId=${channelId}`)
}

export const searchGithub = async(query) => {
    return await axios.get(`${BACKEND_URL}/api/github/search/repositories?q=${query}`)
}

export const searchUdemy = async(search) => {
    return await axios.get(`${BACKEND_URL}/api/udemy/courses?search=${search}`)
}

export const getRatings = async(id) => {
    return await axios.get(`${BACKEND_URL}/api/udemy/courses/${id}`)
}