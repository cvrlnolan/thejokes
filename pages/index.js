import React from "react"
import Head from "next/head"
import { Dropdown } from "primereact/dropdown"
import { Divider } from "primereact/divider"
import { Button } from "primereact/button"
import { Toast } from "primereact/toast"
import axios from "axios"
import useSWR from "swr"
import { useState, useEffect, useRef } from "react"
import Navbar from "@/components/layout/navbar"
import LoadingPanel from "@/components/layout/loadingPanel"
import JokePanel from "@/components/joke/jokePanel"
import { categories, blacklist } from "@/assets/filterData"


export default function Home() {

  const [category, setCategory] = useState(null)

  const [black, setBlacklist] = useState(null)

  const [custJokes, setCustomJokes] = useState([])

  const [range, setRange] = useState(10)

  const [loading, setLoading] = useState(false)

  const [loading2, setLoading2] = useState(false)

  const toast = useRef()

  useEffect(() => {
    setRange(10)
  }, [])

  const fetcher = url => axios.get(url).then(res => res.data)

  const { data: jokes, error } = useSWR("/api/jokes/", fetcher, { revalidateOnFocus: false })

  if (error) {
    return (
      <>
        <div>Error encountered ...</div>
      </>
    )
  }

  if (!jokes) {
    return (
      <>
        <Head>
          <title>The Jokes</title>
        </Head>
        <Navbar>
          <div className="p-d-flex-column p-mx-auto">
            {[...Array(10)].map((e, i) => (
              <LoadingPanel key={i} />
            ))}
          </div>
        </Navbar>
      </>
    )
  }

  const loadMore = async () => {
    setLoading(true)
    try {
      const data = await axios.post("/api/jokes/load_more", { range })
      const moreJokes = JSON.parse(JSON.stringify(data.data))
      // console.log(moreJokes)
      moreJokes.forEach((joke) => {
        jokes.push(joke)
      })
      setRange(range + 10)
    } catch (e) {
      console.log(e.message)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  const customJokes = async () => {
    setLoading2(true)
    if (category !== null || black !== null) {
      try {
        const data = await axios.post("/api/jokes/custom", { category, black })
        const custom = JSON.parse(JSON.stringify(data.data))
        // console.log(custom)
        setCustomJokes(custom)
      } catch (e) {
        console.log(e.message)
        setLoading2(false)
      } finally {
        setLoading2(false)
      }
    } else {
      setLoading2(false)
      toast.current.show(
        {
          severity: "warn",
          summary: "Can't load custom jokes",
          detail: "Select a category or flag"
        }
      )
    }
  }

  return (
    <>
      <Head>
        <title>The Jokes</title>
      </Head>
      <Navbar>
        <div className="p-d-flex-column p-d-md-flex p-mx-auto">
          <Toast position="top-center" ref={toast} />
          <Dropdown
            value={category}
            options={categories}
            onChange={(e) => setCategory(e.value)}
            placeholder="Select a category"
            className="p-mr-2 p-mr-md-2"
          />
          <Dropdown
            value={black}
            options={blacklist}
            onChange={(e) => setBlacklist(e.value)}
            placeholder="Select a flag"
            className="p-mr-md-2 p-mt-2 p-mt-md-0"
          />
          <Button
            label="Custom"
            className="p-d-flex p-mt-2 p-mt-md-0 p-button-raised p-button-outlined"
            loading={loading2}
            onClick={customJokes}
          />
        </div>
        {custJokes.map((joke) => (
          <>
            <JokePanel key={joke.id} joke={joke} />
          </>
        ))}
        {custJokes.length > 0 && <Divider />}
        {jokes.map((joke) => (
          <JokePanel key={joke.id} joke={joke} />
        ))}
        <div className="p-d-flex p-mx-auto p-mt-2">
          <Button
            label="Show More"
            className="p-button-raised"
            disabled={range === 300}
            loading={loading}
            onClick={loadMore}
          />
        </div>
      </Navbar>
    </>
  )
}
