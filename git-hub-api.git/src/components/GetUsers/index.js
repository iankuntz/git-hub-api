import { useState } from "react"
import { GetUsersCss } from "../../GetUsersCss"
import toast from "react-hot-toast"
import api from "../../services/api"
import BeatLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const GetUsers = () => {

    const [members, setMembers] = useState([])
    const [searchOrg, setSearchOrg] = useState("")
    const [loader, setLoader] = useState(false)



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
            setLoader(true)

        }else if(!response){ 
    
            toast.error("Not found") 
            setMembers([])

        }
        setTimeout(() => {

            setLoader(false)

        }, 1500)
    }
    
    const handleClean = () => {

        setSearchOrg("")
        setMembers([])
        setLoader(false)
    }

    const loaderCss = css`
        margin: 15px 0 0 0;
        position: relative;
        right: 85px;
    `

    return(
        <GetUsersCss>
            <section className="formOrg">
             <form onSubmit={getMembers}>
                <input placeholder="Organization" onChange={(evt) => setSearchOrg(evt.target.value)} value={searchOrg}/>
                {loader === true ? (
                    
                    <BeatLoader color={"#F50B7E"} loading={loader}  size={20} css={loaderCss}/>
                    
                    ) : (
                        <button className="submitButton" type="submit">List Members</button>

                )}
             
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