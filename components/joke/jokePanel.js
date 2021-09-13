import React from "react"
import { Panel } from "primereact/panel"

const JokePanel = ({ joke }) => {
    return (
        <>
            <div className="p-my-2">
                <Panel header={joke.category} toggleable>
                    <div className="p-text-center">
                        {joke.type === "single" && joke.joke}
                        {joke.type === "twopart" && joke.setup}
                        {joke.type === "twopart" && `\r\n` + joke.delivery}
                    </div>
                </Panel>
            </div>
        </>
    )
}

export default JokePanel