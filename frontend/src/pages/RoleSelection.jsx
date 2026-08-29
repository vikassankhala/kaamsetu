import { useState } from "react";


function RoleSelection(){
    
    const[role , setRole] = useState("");
    return(
        <div>
            <h1>Rogzar</h1>
            <h2>Aap kya karna chahte hain?</h2>
            <button onClick={() => setRole("giver")}>
                Kaam Dena Hai</button>

            <button onClick={()=> setRole("taker")}>
                Kaam Chahiye</button>
            <p>Selected role: {role}</p>
            {role === "giver" && <h2>Job Giver Home</h2>}
            {role === "taker" && <h2>Job Taker Home</h2>}
        </div>
    );
}

export default RoleSelection;