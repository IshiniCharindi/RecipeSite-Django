import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ManagementBox from "./ManagementBox/ManagementBox.jsx";
import Header from "../Header/Header.jsx";
import './AdminPanel.css';
import intro from '../../assets/adminPanelIntro.jpg';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import Footer from "../Footer/Footer.jsx";

const AdminPanel = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalRecipies, setTotalRecipies] = useState(0);

    const getTotalUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/users/total_count_users/');
            console.log(response.data);
            setTotalUsers(response.data['total users']);
        } catch (error) {
            console.error('Error fetching total users:', error);
        }
    };

    const getTotalRecipes = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/recipies/total_count_recipies/');
            console.log(response.data);
            setTotalRecipies(response.data['total recipies']);
        } catch (error) {
            console.error('Error fetching total recipes:', error);
        }
    };

    useEffect(() => {
        getTotalUsers();
        getTotalRecipes();
    }, []);

    return (
        <>
            <Header/>
            <div className="ManagementContainer">
                <div className="ManagementTopContainer">
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12 ">
                                <div className="card mb-3" style={{'height': '52vh'}}>
                                    <div className="row g-0 largeDevice">
                                        <div className="col-5 col-lg-5 col-md-5 col-sm-12 ">
                                            <div className="card-body">
                                                <h1 className="card-title welcomeMsg">Welcome to Admin Dashboard</h1>
                                                <p className="card-text welcomePara">"Effortlessly manage all your
                                                    recipes, ingredients, and user interactions with our intuitive
                                                    dashboard. Simplify your workflow and focus on creating
                                                    mouth-watering dishes for your audience."</p>
                                            </div>
                                        </div>
                                        <div className="col-7 col-lg-7 col-md-7 col-sm-12">
                                            <img src={intro} className="card-img-top img-fluid rounded-start" alt="..."
                                                 style={{'height': '50vh'}}/>
                                        </div>

                                    </div>
                                    {/*for small device*/}
                                    <div className="smallDevice">
                                        <div className="card-body">
                                            <h1 className="card-title welcomeMsg">Welcome to Admin Dashboard</h1>
                                            <img src={intro} className="card-img-top img-fluid rounded-start" alt="..."
                                                 style={{'height': '50vh'}}/>
                                            <p className="card-text welcomePara">"Effortlessly manage all your
                                                recipes, ingredients, and user interactions with our intuitive
                                                dashboard. Simplify your workflow and focus on creating
                                                mouth-watering dishes for your audience."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 totalContainer">
                                <div className="card mb-3 col-sm-5" style={{'width':'50vw'}}>
                                    <div className="row g-0">
                                        <div className="col-4 col-md-5">
                                            <img src={icon2} alt="" className="img-fluid rounded-start mt-4 m-3"/>
                                        </div>
                                        <div className="col-8 col-md-7">
                                            <div className="card-body">
                                                <h1 className="card-title">{totalRecipies}</h1>
                                                <h5 className="card-text">Total Recipies</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3 col-sm-5" style={{'width':'50vw'}}>
                                    <div className="row g-0">
                                        <div className="col-4 col-md-5">
                                            <img src={icon1} alt="" className="img-fluid rounded-start mt-4 m-3"/>
                                        </div>
                                        <div className="col-8 col-md-7">
                                            <div className="card-body">
                                                <h1 className="card-title">{totalUsers}</h1>
                                                <h5 className="card-text">Total Users</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row controlContainer">
                        <div className="col">
                            <ManagementBox title="Recipie Management" link={"/recipieManagement"}/>
                        </div>
                        <div className="col mt-2 mb-3">
                            <ManagementBox title="User Management" link={"/userManagement"}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default AdminPanel;
