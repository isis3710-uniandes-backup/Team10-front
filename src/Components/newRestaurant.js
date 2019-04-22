import React from 'react';
import axios from 'axios';
import {FormattedMessage} from 'react-intl';

export default class NewRestaurants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formFields: {fullName: ''}
        }

    }

    inputChangeHandler(e) {
        let formFields = {...this.state.formFields};
        formFields[e.target.name] = e.target.value;
        this.setState({
            formFields
        });
    }

    formHandler(e, formFields) {
        e.preventDefault();
        axios.post('http://localhost:3001/restaurants/create', formFields)
                .then(function (response) {
                    alert("Restaurant added");
                    //Perform action based on response
                })
                .catch(function (error) {
                    alert("Restaurant already exists");
                    //Perform action based on error
                });
    }

    render() {
        return (
                <div className="container p-3">
                    <div className="page-header">
                        <h1><FormattedMessage id="Sign up your restaurant"/></h1>
                    </div>
                    <form className="well form-horizontal" onSubmit={(e) => this.formHandler(e, this.state.formFields)} action="">
                        <fieldset>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><FormattedMessage id="Full Name"/></label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span><FormattedMessage id="Full Name">{placeholder=><input id="fullName" name="fullName" aria-label="Full name input" placeholder={placeholder} className="form-control" required={true } defaultValue="" type="text" onChange={(e) => this.inputChangeHandler.call(this, e)}/>}</FormattedMessage></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><FormattedMessage id="Description"/></label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span><FormattedMessage id="Description of the restaurant">{placeholder=><input id="description" name="description" aria-label="Description input" placeholder={placeholder} className="form-control" required={true } defaultValue="" type="text" onChange={(e) => this.inputChangeHandler.call(this, e)}/>}</FormattedMessage></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><FormattedMessage id="Address Line"/></label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span><FormattedMessage id="Address Line">{placeholder=><input id="addressLine" name="addressLine" aria-label="Address line input" placeholder={placeholder} className="form-control" required={true } defaultValue="" type="text" onChange={(e) => this.inputChangeHandler.call(this, e)}/>}</FormattedMessage></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><FormattedMessage id="Category"/></label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                                        <select name="category" className="selectpicker form-control" aria-label="Category picker" onChange={(e) => this.inputChangeHandler.call(this, e)}>
                                            <FormattedMessage id="Fast food">{placeholder=><option>{placeholder}</option>}</FormattedMessage>
                                            <FormattedMessage id="Mexican">{placeholder=><option>{placeholder}</option>}</FormattedMessage>
                                            <FormattedMessage id="Chinese">{placeholder=><option>{placeholder}</option>}</FormattedMessage>
                                            <FormattedMessage id="Typical">{placeholder=><option>{placeholder}</option>}</FormattedMessage>
                                            <FormattedMessage id="Fancy">{placeholder=><option>{placeholder}</option>}</FormattedMessage>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><FormattedMessage id="Email"/></label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span><FormattedMessage id="Email">{placeholder=><input id="email" name="email" aria-label="Email input" placeholder={placeholder} className="form-control" required={true } defaultValue="" type="text" onChange={(e) => this.inputChangeHandler.call(this, e)}/>}</FormattedMessage></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label"><FormattedMessage id="Phone Number"/></label>
                                <div className="col-md-8 inputGroupContainer">
                                    <div className="input-group"><span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span><FormattedMessage id="Phone Number">{placeholder=><input id="phoneNumber" name="phoneNumber" aria-label="Phone number input" placeholder={placeholder} className="form-control" required={true } defaultValue="" type="text" onChange={(e) => this.inputChangeHandler.call(this, e)}/>}</FormattedMessage></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-lg btn-dark btn-block"><FormattedMessage id="Submit"/></button>
                
                            </div>
                        </fieldset>
                    </form>
                </div>
                );
    }
}
