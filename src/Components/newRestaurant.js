import React from 'react';

export default class NewRestaurants extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="container p-3">
                    <div className="page-header">
                        <h1>Sign up your restaurant</h1>
                    </div>
                    <form className="well form-horizontal" action="http://localhost:3001/restaurants/create" method="POST">
                        <fieldset>
                            <div className="form-group">
                                <label className="col-md-4 control-label">Full Name</label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span><input id="fullName" name="fullName" placeholder="Full Name" className="form-control" required={true } defaultValue="" type="text"/></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label">Description</label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span><input id="description" name="description" placeholder="Description of the restaurant" className="form-control" required={true } defaultValue="" type="text"/></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label">Address Line</label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span><input id="addressLine" name="addressLine" placeholder="Address Line" className="form-control" required={true } defaultValue="" type="text"/></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label">Category</label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                        <select name="category" className="selectpicker form-control">
                                            <option>Fast food</option>
                                            <option>Mexican</option>
                                            <option>Chinese</option>
                                            <option>Typical</option>
                                            <option>Fancy</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label">Email</label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span><input id="email" name="email" placeholder="Email" className="form-control" required={true } defaultValue="" type="text"/></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label">Phone Number</label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span><input id="phoneNumber" name="phoneNumber" placeholder="Phone Number" className="form-control" required={true } defaultValue="" type="text"/></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                
                            </div>
                        </fieldset>
                    </form>
                </div>
                );
    }
}
