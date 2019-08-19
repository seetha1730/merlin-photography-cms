import React from 'react';
import { METHODS } from 'http';

class Category extends React.Component {


    state = {
        category:'',
    }

    addCategory(){
       fetch('http://localhost:5100/api/addCategory',{
           method:'POST',
           headers:{
                'Content-Type': 'application/json',
           },
           body:JSON.stringify({name:this.state.category})
       }).then(result => result.json().then(res => alert(res.msg)))
      
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
                        <input type="text" className="form-control" placeholder="add categories" onChange={(e) => this.setState({category: e.target.value})}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => this.addCategory()}>Add</button>

                </form>
            </div>
        );
    }



}

export default Category;
