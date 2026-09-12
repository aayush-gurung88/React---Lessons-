import React, { createContext, useState } from "react"
import ComponentB from "./ComponentB"

export const UserContext = createContext();

function ComponentA()
{
    const [user, setUser] = useState("Rookie Ninja")

    return (

        <div className="box">

            <h1>Component A </h1>
            <h2>{`Hello ${user}`}</h2>
            {/* <ComponentB user = {user}/> */}

            <UserContext.Provider value={user}>
                    <ComponentB user = {user}/>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA