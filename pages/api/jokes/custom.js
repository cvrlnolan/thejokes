import axios from "axios"

export default async function handler(req, res) {

    const { black, category } = req.body

    try {
        if (category !== null && black !== null) {
            const apiUrl = "https://v2.jokeapi.dev/joke/" + category + "?blacklistFlags=" + black + "&amount=10"
            const data = await axios.get(apiUrl)
            const jokes = JSON.parse(JSON.stringify(data.data["jokes"]))
            // console.log(jokes)
            res.status(200).json(jokes)
        }
        if (category !== null && black === null) {
            const apiUrl = "https://v2.jokeapi.dev/joke/" + category + "?amount=10"
            const data = await axios.get(apiUrl)
            const jokes = JSON.parse(JSON.stringify(data.data["jokes"]))
            // console.log(jokes)
            res.status(200).json(jokes)
        }
        if (category === null && black !== null) {
            const apiUrl = "https://v2.jokeapi.dev/joke/Any?" + "blacklistFlags=" + black + "&amount=10"
            const data = await axios.get(apiUrl)
            const jokes = JSON.parse(JSON.stringify(data.data["jokes"]))
            // console.log(jokes)
            res.status(200).json(jokes)
        }
        res.status(200).end()
    } catch (e) {
        console.log(e.message)
        res.status(400).end()
    }
}