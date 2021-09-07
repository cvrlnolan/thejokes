import { Menubar } from "primereact/menubar"
import { InputText } from "primereact/inputtext"
import { OverlayPanel } from "primereact/overlaypanel"
import { ProgressSpinner } from "primereact/progressspinner"
import { useRef, useState } from "react"
import axios from "axios"
import JokePanel from "@/components/joke/jokePanel"

const navItems = [
    {
        label: "Home",
        url: "/"
    },
    {
        label: "Github",
        url: "https://github.com/cvrlnolan/thejokes"
    },
]

const Navbar = ({ children }) => {

    const op = useRef()

    const [value, setValue] = useState({
        search: ""
    })

    const [loading, setLoading] = useState(false)

    const [results, setResults] = useState()

    const onChange = (e) => {
        const { value, name } = e.target
        op.current.show(e)
        search(value)
        setValue(prevState => ({ ...prevState, [name]: value }))
    }

    const start = <div className="p-text-center p-text-uppercase p-mr-2">TheJokes</div>

    const end = <InputText
        placeholder="Search a joke.."
        type="text"
        name="search"
        value={value.search}
        onChange={onChange}
    />

    const search = async (searchVal) => {
        setLoading(true)
        if (searchVal !== "") {
            try {
                const data = await axios.post("/api/jokes/search", { searchVal })
                const res = JSON.parse(JSON.stringify(data.data))
                // console.log(res)
                setResults(res)
            } catch (e) {
                console.log(e.message)
            } finally {
                setLoading(false)
            }
        } else {
            setResults()
            setLoading(false)
        }
    }

    return (
        <>
            <div className="p-d-flex">
                <Menubar
                    model={navItems}
                    start={start}
                    end={end}
                    style={{ 
                        width: "100vw",
                        borderRadius: 0
                    }}
                />
            </div>
            <div className="p-d-flex p-p-5 p-flex-column">
                <OverlayPanel
                    ref={op}
                    dismissable
                    appendTo={"self"}
                    style={{ width: "450px" }}
                    breakpoints={{ "960px": '75vw', "640px": '100vw' }}
                >
                    {loading &&
                        <div className="p-d-flex p-mx-auto">
                            <ProgressSpinner
                                style={{ width: "50px", height: "50px" }}
                            />
                        </div>
                    }
                    {/* Search results */}
                    {results && results.map((joke) => (
                        <JokePanel key={joke.id} joke={joke} />
                    ))}
                    {!results && !loading &&
                        <div className="p-d-flex p-mx-auto">
                            <p>No result found.</p>
                        </div>
                    }
                </OverlayPanel>
                {children}
            </div>
        </>
    )
}

export default Navbar