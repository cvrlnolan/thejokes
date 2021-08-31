import axios from "axios"

export default async function handler(req, res) {

    const { range } = req.body

    try {
        const api = "https://v2.jokeapi.dev/joke/Any?idRange=" + range + "-" + (range + 10) + "&amount=10"
        const data = await axios.get(api)
        const jokes = JSON.parse(JSON.stringify(data.data["jokes"]))
        // console.log(jokes)
        res.status(200).json(jokes)
    } catch (e) {
        console.log(e.message)
        res.status(400).end()
    }
}