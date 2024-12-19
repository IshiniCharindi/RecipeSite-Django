import React, {useEffect, useState} from 'react';
import ManagementBox from "./ManagementBox/ManagementBox.jsx";
import Header from "../Header/Header.jsx";
import './AdminPanel.css';
import intro from '../../assets/adminPanelIntro.jpg'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import axios from "axios";


const AdminPanel = () => {

    const[totalUsers,setTotalUsers] = useState(0)
    const[totalRecipies , setTotalRecipies] = useState(0)


    const getTotalUsers = async() => {
        await axios.get('http://localhost/api/users/total_count_users/')
        console.log(respose)
        setTotalUsers(response)
    }

    const getTotalRecipes = async() => {
        await axios.get('http://localhost/api/users/total_count_recipies/')
        console.log(response)
        setTotalRecipies(response)
    }

    useEffect(() => {
        getTotalUsers()
        getTotalRecipes()
    },[])

    return (
        <>
            <Header />
            <div className="ManagementContainer">
                <div className="ManagementTopContainer">
                    <div className="container mt-2">
                        <div className="row">
                            <div className="col-9" >
                                <div className="card flex-row" style={{'height':'51vh'}}>
                                    <div className="card-body" style={{'marginTop':'90px'}}>
                                        <h1 className="welcomeMsg">Welcome to Admin Dashboard</h1>
                                        <p className="card-text welcomePara">"Effortlessly manage all your recipes, ingredients, and user interactions with our intuitive dashboard. Simplify your workflow and focus on creating mouth-watering dishes for your audience."</p>
                                    </div>
                                    <img src={intro} className="card-img-top" alt="..." style={{'height':'50vh'}}/>

                                </div>
                            </div>
                            <div className="col-3">
                                    <div className="card" >
                                        <div className="card-body flex-row">
                                            <div>
                                                <img src={icon2} alt=""  style={{'height':'100px' , 'width':'100px'}}/>
                                            </div>
                                            <div>
                                                <h2>{totalRecipies}</h2>
                                                <h5 className="card-title">Total Recipies</h5>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card mt-2" >
                                        <div className="card-body flex-row">
                                            <div>
                                                <img src={icon1} alt="" style={{'height':'100px' , 'width':'100px'}}/>
                                            </div>
                                            <div>
                                                <h2>{totalUsers}</h2>
                                                <h5 className="card-title">Total Users</h5>
                                            </div>

                                        </div>
                                    </div>


                            </div>

                        </div>

                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <ManagementBox title="Recipie Management" link={"/recipieManagement"}/>
                        </div>
                        <div className="col">
                            <ManagementBox title="User Management" link={"/userManagement"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPanel;
