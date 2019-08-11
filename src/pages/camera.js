import React from 'react';

function Camera() {

    return (
        <div>
            <h2>View Camera setting</h2>

            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">setting</th>
                    <th scope="col">Details</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>setting1</td>
                    <td>xxxx</td>
                    <td><p className="underline">Edit</p>/<p className="underline">delete</p></td>

                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>setting2</td>
                    <td>xxxx</td>
                    <td><p className="underline">Edit</p>/<p className="underline">delete</p></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>setting3</td>
                    <td>xxxx</td>
                    <td><p className="underline">Edit</p>/<p className="underline">delete</p></td>
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
                    <label>camera</label>
                    <input type="text" className="form-control" placeholder="Camera"/>
                </div>
                <div className="form-group col-md-6">
                    <label>Lense type</label>
                    <input type="text" className="form-control" placeholder="Lense"/>
                </div>
                <div className="form-group col-md-6">
                    <label>Focus type</label>
                    <input type="text" className="form-control" placeholder="Focus"/>
                </div>
                <div className="form-group col-md-6">
                    <label>ISO Model</label>
                    <input type="text" className="form-control" placeholder="ISO"/>
                </div>


                <button type="button" className="btn btn-primary ">Add</button>

            </form>
        </div>
    );

}


export default Camera;
