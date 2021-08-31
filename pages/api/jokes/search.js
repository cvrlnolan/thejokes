import axios from "axios"

export default async function handler(req, res) {

    const { searchVal } = req.body

    const apiUrl = "https://v2.jokeapi.dev/joke/Any?contains=" + searchVal + "&amount=5"

    try {
        const data = await axios.get(apiUrl)
        const jokes = JSON.parse(JSON.stringify(data.data["jokes"]))
        // console.log(jokes)
        res.status(200).json(jokes)
    } catch (e) {
        console.log(e)
        res.status(400).end()
    }
}