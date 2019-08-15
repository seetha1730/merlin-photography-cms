import React from 'react';


class Setting extends React.Component {
    state = {
        email:'',password:''
    }

    addSetting(){
        //http post -> api send
        console.log(this.state.email,this.state.password)

        //http get => api new values
    }

    render() {

        return (
            <div>
                <h2>Account Info</h2>
                <div>
                    <p>Email:dsf</p>
                    <p>password:dsf</p>
                    <p className="underline">Edit Account</p>
                </div>

                <form className="mt-3">
                    <h3>Update Info</h3>
                    <div className="form-group">

                        <input type="text" className="form-control" placeholder="Email"  onChange={(e) => this.setState({email:e.target.value})}/>

                    </div>
                    <div className="form-group">

                        <input type="password" className="form-control" placeholder="password"
                               onChange={(e) => this.setState({password:e.target.value})}/>

                    </div>
                    <button type="button" className="btn btn-primary " onClick={() =>this.addSetting()}>Update</button>

                </form>
            </div>
        );
    }

}

export default Setting;
