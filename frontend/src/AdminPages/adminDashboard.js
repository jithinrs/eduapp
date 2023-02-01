import React, { useContext, useEffect, useState } from "react";
import './style.css'
import AuthContext from "../context/authcontext";



import { AdminBase } from "./adminMain";
import axios from "axios";

export function Admindashboard() {

    const { BASE_URL } = useContext(AuthContext)
    const [alldatas, setAlldatas] = useState([])

    useEffect(()=>{
        axios.get(BASE_URL+'/admin_eduapp/admin-dashboard').then((response)=>{
            setAlldatas(response.data)
        })
    },[])


    return (
        <div>
            <AdminBase></AdminBase>
            <h1>Dashboard</h1>
            <div className="container col-md-12">
                <div className="card shadow my-5">
                    <div className="card-body dashboard-body">
                        <div className="row container d-flex justify-content-between">

                            <div className="dashboard-small-card card shadow my-5 col-3">
                                <h4 className="text-white">Total Teachers</h4>
                                <h2>{alldatas.total_teachers}</h2>
                            </div>
                            <div className="dashboard-small-card card shadow my-5 col-3">
                                <h4 className="text-white">Total Students</h4>
                                <h2>{alldatas.total_students}</h2>
                            </div>
                            <div className="dashboard-small-card card shadow my-5 col-3">
                                <h4 className="text-white">Total Courses</h4>
                                <h2>{alldatas.total_courses}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}