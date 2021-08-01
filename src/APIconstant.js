import axios from "axios"

const BaseUrl = "http://localhost:8000/api/"

const instance = axios.create({
    baseURL: BaseUrl
})

export default instance

export const fetchJobs = "jobs-list/?limit=5&offset="
export const fetchNews = "news-list/?limit=5&offset="
export const fetchTeamMembers = "team-members-list/"
export const SendMessage = "message-create/"

