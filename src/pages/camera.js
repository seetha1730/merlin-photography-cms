import React from 'react';

class Camera extends React.Component {
    state = {
        name:'',camera:'',lense:'',focus:'',ISO:'',
    }

    addCamera(){
        //http post -> api send
        console.log(this.state.name, this.state.camera,this.state.lense,this.state.focus,this.state.ISO)

        //http get => api new values
    }

    render() {

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
                        <input type="text" className="form-control" placeholder="Name"
                               onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>camera</label>
                        <input type="text" className="form-control" placeholder="Camera"  onChange={(e) => this.setState({camera: e.target.value})}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Lense type</label>
                        <input type="text" className="form-control" placeholder="Lense"  onChange={(e) => this.setState({lense: e.target.value})}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Focus type</label>
                        <input type="text" className="form-control" placeholder="Focus"  onChange={(e) => this.setState({focus: e.target.value})}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>ISO Model</label>
                        <input type="text" className="form-control" placeholder="ISO"  onChange={(e) => this.setState({ISO: e.target.value})}/>
                    </div>


                    <button type="button" className="btn btn-primary  " onClick={() => this.addCamera()}>Add</button>

                </form>
            </div>
        );
    }

}


export default Camera;
