import axios from "axios"

export default async function handler(req, res) {
    try {
        const data = await axios.get("https://v2.jokeapi.dev/joke/Any?idRange=0-10&amount=10")
        const jokes = JSON.parse(JSON.stringify(data.data["jokes"]))
        // console.log(jokes)
        res.status(200).json(jokes)
    } catch (e) {
        console.log(e.message)
        res.status(400).end()
    }
}