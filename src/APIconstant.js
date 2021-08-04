import axios from "axios";

// const BaseUrl = "http://127.0.0.1:8000/api/"
const BaseUrl = "https://fpcbackend.herokuapp.com/api/"

const instance = axios.create({
    baseURL: BaseUrl
})

export default instance

export const fetchJobs = "jobs-list/?limit=5&offset="
export const fetchNews = "news-list/?limit=5&offset="
export const fetchTeamMembers = "team-members-list/"
export const SendMessage = "message-create/"
export const Subscribe = "subscribe/"

