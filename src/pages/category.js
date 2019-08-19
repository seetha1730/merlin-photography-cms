import React from 'react';
import { METHODS } from 'http';

class Category extends React.Component {


    state = {
        category:'',
        catList:[],
    }

    componentWillMount() {
       this.getCatList()
    }

    getCatList() {
        fetch('http://192.168.1.103:5100/api/Category').then(list => list.json().then(result => this.setState({catList:result})))
    }

    addCategory(){
       fetch('http://192.168.1.103:5100/api/addCategory',{
           method:'POST',
           headers:{
                'Content-Type': 'application/json',
           },
           body:JSON.stringify({name:this.state.category})
       }).then(result => result.json().then(res => {
           this.getCatList()
           alert(res.msg)
       }))
      
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
                    {this.state.catList.map( (list,index) =>
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{list.name}</td>
                            <td><p className="underline">Edit</p>/<p className="underline">delete</p></td>

                        </tr>
                    )}
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
