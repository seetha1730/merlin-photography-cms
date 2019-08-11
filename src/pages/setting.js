import React from 'react';

function Setting() {

return(
    <div>
        <h2>Account Info</h2>
        <div>
            <p>Email:dsf</p>
            <p>password:dsf</p>
            <p className="underline">Edit Account</p>
        </div>

        <form  className="mt-3">
            <h3>Update Info</h3>
        <div className="form-group">

        <input type="text" className="form-control"  placeholder="Email" />

        </div>
            <div className="form-group">

                <input type="password" className="form-control"  placeholder="password" />

            </div>
        <button type="button" className="btn btn-primary ">Update</button>

        </form>
    </div>
);

}

export default Setting;
