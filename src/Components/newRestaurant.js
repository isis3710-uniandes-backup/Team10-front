import React from 'react';

export default class NewRestaurants extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div class="container p-3">
                    <div class="page-header">
                        <h1>Sign up your restaurant</h1>
                    </div>
                    <form className="well form-horizontal">
                        <fieldset>
                            <div className="form-group">
                                <label className="col-md-4 control-label">Full Name</label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span><input id="fullName" name="fullName" placeholder="Full Name" className="form-control" required="true" value="" type="text"/></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label">Description</label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span><input id="description" name="description" placeholder="Description of the restaurant" className="form-control" required="true" value="" type="text"/></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label">Address Line</label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span><input id="addressLine" name="addressLine" placeholder="Address Line" className="form-control" required="true" value="" type="text"/></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label">Category</label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                        <select className="selectpicker form-control">
                                            <option>A really long option to push the menu over the edget</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label">Email</label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span><input id="email" name="email" placeholder="Email" className="form-control" required="true" value="" type="text"/></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label">Phone Number</label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span><input id="phoneNumber" name="phoneNumber" placeholder="Phone Number" className="form-control" required="true" value="" type="text"/></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                
                            </div>
                        </fieldset>
                    </form>
                </div>
                );
    }
}
