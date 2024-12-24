import React from 'react';

const AddRecipies = () => {
    return (
        <div>
            <h1>Add Recipie</h1>
            <form action="">
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="staticEmail" value="email@example.com"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Ingredients</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Steps</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-4">
                        <input className="form-control" type="file" id="formFile"/>
                    </div>
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-4">
                        <input className="form-control" type="file" id="formFile"/>
                    </div>
                </div>

                <div className="d-grid gap-2 d-md-block align-content-md-end">
                    <button className="btn btn-success" type="button">Add Recipe</button>
                    <button className="btn btn-danger" type="button">Cancel</button>
                </div>



                </form>

        </div>
    );
};

export default AddRecipies;