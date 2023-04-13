import React from "react";
import { Link } from "react-router-dom";

const ContactList = ()=>{
    return (
        <>
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">Contact Manager
                                <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                                    <i className="fa fa-plus-circle me-2" />
                                    New</Link>
                                </p>
                                <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius nostrum veniam sint! Ipsa, voluptate corrupti, hic sapiente distinctio provident non eos consectetur ex esse accusantium ipsum dolorum explicabo quia.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form>
                                    <div className="mb-2">
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default ContactList;