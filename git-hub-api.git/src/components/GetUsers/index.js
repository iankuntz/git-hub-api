import { useState } from "react"
import toast from "react-hot-toast"
import api from "../../services/api"
import { GetUsersCss } from "../../GetUsersCss"

const GetUsers = () => {

    const [members, setMembers] = useState([])
    const [searchOrg, setSearchOrg] = useState("")


    const getMembers = async(evt) => {
        evt.preventDefault()

        if(searchOrg === ""){

            toast.error("Empty input")
        }

        const response = await api.request({
            url: `orgs/${searchOrg}/members`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':  `token: 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`,
            }
        })
        
        if(response.data.length === 0){
            
            toast.error("There are not members in this organization")
            setMembers([])

        }else if(!!response){

            setMembers(response.data)

        }else if(!response){ 
    
            toast.error("Not found") 
            setMembers([])

        }
    }
    
    const handleClean = () => {

        setSearchOrg("")
        setMembers([])
    }

    return(
        <GetUsersCss>
            <section className="formOrg">
             <form onSubmit={getMembers}>
                <input placeholder="Organization" onChange={(evt) => setSearchOrg(evt.target.value)} value={searchOrg}/>
                <button className="submitButton" type="submit">List Members</button>
             </form>
                <button className="cleanButton" onClick={handleClean}>Clean Filter</button>
            </section>
        

            <section className="tableMembers">
                <ul>
                    {members.map((item, index) => (
                        
                        <li key={`${index}_li`}>
                        <img src={item.avatar_url} alt="avatar" key={`${index}_img`}></img>
                        <p key={`${index}_p1`}>Login: {item.login}</p>
                        <p key={`${index}_p2`}>ID: {item.id}</p>
                        <a href={item.html_url} key={`${index}_a1`}>Visit Profile</a>
                    </li>
            ))}
                </ul>
            </section>
        
        </GetUsersCss>
    )
}

export default GetUsers;