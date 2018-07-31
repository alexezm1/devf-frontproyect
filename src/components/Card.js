import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'


class Card extends Component {
    constructor(props){
        super(props)
    }

    

    render() {
        return (
            <div>
                {/* <div className="container">
                    <div className="card col-4"> */}
                    <div className=" card m-3 col-4 d-flex flex-wrap justify-content-center">
                        <div className="card-body">
                            <h3 className="card-title">{this.props.nombre}</h3>
                            <img src={this.props.portada} width="250" height="400" alt="portada"/>
                            <h4 className="card-subtitle"><br />Sinopsis:</h4>
                            <p>{this.props.sinopsis}</p>
                            <p>{this.props.uid}</p>
                            <Link to={"/pelicula/" + this.props.uid}><button className="btn btn-primary">Ver película!</button></Link>
                        </div>
                    </div>
                </div>
            // </div>



        );
    };

};

export default Card;