import React from 'react';

function Photos() {

return(
    <div>
        <h2>View photos</h2>
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Photos</th>
                <th scope="col">setting</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>photo1</td>
                <td><p className="underline">view</p>/<p className="underline">delete</p></td>

            </tr>
            <tr>
                <th scope="row">2</th>
                <td>photo2</td>
                <td><p className="underline">view</p>/<p className="underline">delete</p></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>photo3</td>
                <td><p className="underline">view</p>/<p className="underline">delete</p></td>
            </tr>
            </tbody>
        </table>
        <form>
            <h3>Add Camera setting</h3>
            <div className="form-group col-md-6">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name"/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputCategory">Category</label>
                <select className="form-control">
                    <option selected>Category...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputCategory">Camera</label>
                <select  className="form-control">
                    <option selected>Camera...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="input-group col-md-6">
                <div className="custom-file">
                    <input type="file" className="custom-file-input"/>
                        <label className="custom-file-label" >Choose file</label>
                </div>
                <div className="input-group-append">
                    <span className="input-group-text" >Upload</span>
                </div>
            </div>
            <div className="form-group col-md-6 mt-3">
                <label >Description</label>
                <textarea className="form-control"  rows="3"></textarea>
            </div>


            <button type="button" className="btn btn-primary ">Add</button>

        </form>
    </div>
);

}
export default Photos;
