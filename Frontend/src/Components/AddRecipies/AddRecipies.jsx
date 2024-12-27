import React, { useState } from 'react';
import axios from 'axios';
import Header from "../Header/Header.jsx";
import './AddRecipies.css';
import Footer from "../Footer/Footer.jsx";

const AddRecipies = () => {
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        steps: '',
        description: '',
        image1: null,
        image2: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', formData.title);
        data.append('ingredients', formData.ingredients);
        data.append('steps', formData.steps);
        data.append('description', formData.description);
        if (formData.image1) data.append('image1', formData.image1);
        if (formData.image2) data.append('image2', formData.image2);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/recipies/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Recipe added successfully!');
            console.log(response.data);
        } catch (error) {
            console.error(error);
            console.log(data);

            alert('Failed to add the recipe. Please try again.');
        }
    };

    return (
        <div className="mainContainer">
            <Header />
            <div className="container addRecipieContainer">
                <h1 className="p-5">Add Recipie</h1>
                <form className="addRecipieForm p-4" onSubmit={handleSubmit}>
                    <div className="mb-3 row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-fill" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5"/>
                            </svg> &nbsp;
                            Title
                        </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="ingredients" className="col-sm-2 col-form-label">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket2-fill" viewBox="0 0 16 16">
                                <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"/>
                            </svg> &nbsp;
                            Ingredients
                        </label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="ingredients" name="ingredients" cols="30" rows="5" value={formData.ingredients} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="steps" className="col-sm-2 col-form-label">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                            </svg> &nbsp;
                            Steps
                        </label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="steps" name="steps" cols="30" rows="10" value={formData.steps} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="description" className="col-sm-2 col-form-label">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-paragraph" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-2A1.5 1.5 0 0 0 3.5 2h9A1.5 1.5 0 0 0 14 0.5v9A1.5 1.5 0 0 0 12.5 14h-9A1.5 1.5 0 0 0 2 12.5v-9z"/>
                            </svg> &nbsp;
                            Description
                        </label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="description" name="description" cols="30" rows="3" value={formData.description} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
                            </svg> &nbsp;
                            Image 1</label>
                        <div className="col-sm-4">
                            <input className="form-control" type="file" id="formFile" value={formData.image1} onChange={handleChange}/>
                        </div>
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
                            </svg> &nbsp;
                            Image 2</label>
                        <div className="col-sm-4">
                            <input className="form-control" type="file" id="formFile" value={formData.image2} onChange={handleChange}/>
                        </div>
                    </div>
                    {/*value={formData.description} onChange={handleChange}*/}
                    <div className="d-grid gap-2 d-md-block text-end pt-4 pb-4 buttonContainer">
                        <button className="btn btn-success " type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                            </svg> &nbsp;
                            Add Recipe</button> &nbsp;
                        <button className="btn btn-danger" type="reset">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                            </svg> &nbsp;
                            Cancel</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddRecipies;
