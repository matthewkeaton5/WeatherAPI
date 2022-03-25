import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from "react-bootstrap";
const UserForm = (props) =>{
    console.log(props)
    return (
        <div className="container h-100">
            <form onChange={event => props.update(event.target.value)}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Zip"
                            name="Zip"
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Start date"
                            name="StartDate"
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    );


}
export default UserForm;