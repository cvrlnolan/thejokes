import React from "react"
import { Panel } from "primereact/panel"
import { Skeleton } from "primereact/skeleton"


const LoadingPanel = () => {
    return (
        <>
            <div className="p-my-2">
                <Panel style={{ width: "85vw", height: "200px" }}>
                    <div className="p-jc-center">
                        <Skeleton />
                    </div>
                </Panel>
            </div>
        </>
    )
}

export default LoadingPanel