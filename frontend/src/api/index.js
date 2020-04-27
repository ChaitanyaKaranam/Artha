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