import React ,{useContext, useEffect, useState} from "react";
import AuthContext from "../context/authcontext";


import { AdminBase } from "./adminMain";

export function Adminsubjects() {

    const { authtokens } = useContext(AuthContext)
    const [subjects, setSubjects] = useState([])
    const { BASE_URL } = useContext(AuthContext)


    const getSubjects = async () => {
        let response =  await fetch(BASE_URL+'/admin_eduapp/get-all-subjects', {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authtokens?.token.access)
            }
        })
        let data = await response.json()
        console.log(data);
        setSubjects(data)
    }
    useEffect(() => {
        getSubjects()
    },[])

    return (
        <div>
            <AdminBase></AdminBase>
            <h1>subject</h1>
            {
                subjects.map((sub,key)=> {
                    return(
                        <div key={key}>
                            
                            <button type="button" className="btn btn-outline-danger" disabled>{sub.title}</button>
                            <br />
                            <br />
                        </div>
                    )
                })
            }


        </div>
    )
}