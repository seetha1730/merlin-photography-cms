import React from 'react';

class Category extends React.Component {


    state = {
        category:'',
    }

    addCategory(){
        //http post -> api send
        console.log(this.state.category)

        //http get => api new values
    }

    render() {
        return (
            <div>
                <h2>View Categories</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">setting</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Macro</td>
                        <td><p className="underline">Edit</p>/<p className="underline">delete</p></td>

                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Portsit</td>
                        <td><p className="underline">Edit</p>/<p className="underline">delete</p></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Insects</td>
                        <td><p className="underline">Edit</p>/<p className="underline">delete</p></td>
                    </tr>
                    </tbody>
                </table>
                <form>
                    <div className="form-group">
                        <h3>Add Category</h3>
                        <input type="text" className="form-control" id="add-category" placeholder="add categories" onChange={(e) => this.setState({category: e.target.value})}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => this.addCategory()}>Add</button>

                </form>
            </div>
        );
    }



}

export default Category;
