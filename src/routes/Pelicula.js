import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bodpel from '../components/Bodpel';
import Navbar from '../components/Navbar';

import '../App.css'
import axios from 'axios';



class Pelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: undefined
        }
        
    }
    
    componentDidMount() {
        axios.get('https://pelisdevf.herokuapp.com/api/peliculas/' + this.props.match.params.uid)
            .then(response => {
                this.setState({
                    pelicula: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    updatePelicula() {
        if (this.state.pelicula === undefined) {
            <div>Cargando...</div>
        }
        else {
            // let peli = this.state.pelicula.map((elem, ix, arr) => {
                return <Bodpel
                    
                    nombre={this.state.pelicula.nombre}
                    portada={this.state.pelicula.portada}
                    sinopsis={this.state.pelicula.sinopsis}
                    clasificacion={this.state.pelicula.clasificacion}
                    duracion={this.state.pelicula.duracion}
                    genero={this.state.pelicula.genero}
                    director={this.state.pelicula.director}
                    año={this.state.pelicula.año}
                    actores={this.state.pelicula.actores}
                    premios={this.state.pelicula.premios}
                    trailer={this.state.pelicula.trailer}
                    calificacion = {this.state.pelicula.calificacion} />
            // })
            // return peli
        }

    }

    render() {
        return (
            <div ClassName="App">
                <Navbar />
                <Header />
                {this.updatePelicula()}
                <Footer />
            </div>
        )
    }
}

export default Pelicula;