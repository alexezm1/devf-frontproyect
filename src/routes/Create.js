import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Formpel from '../components/Formpel';
import Navbar from '../components/Navbar';
import '../components/Formpel.css'

import '../App.css'
import axios from 'axios';



class Create extends Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            nombre:undefined,
            duracion:undefined,
            clasificacion:undefined,
            genero:undefined,
            director:undefined,
            sinopsis:undefined,
            premios:undefined,
            año:undefined,
            actores:undefined,
            portada:undefined,
            trailer:undefined
        }
        // this.onInputChange = this.onInputChange.bind(this)
    };

    onInputChange = (e) => {
        if(e.target.name == 'nombre'){
            this.setState({
                nombre: e.target.value
            })
        }else if(e.target.name == "duracion"){
            this.setState({
                duracion: e.target.value
            })
        }else if(e.target.name == "clasificacion"){
            this.setState({
                clasificacion: e.target.value
            })
        }else if(e.target.name == "genero"){
            this.setState({
                genero: e.target.value
            })
        }else if(e.target.name == "director"){
            this.setState({
                director: e.target.value
            })
        }else if(e.target.name == "sinopsis"){
            this.setState({
                sinopsis: e.target.value
            })
        }else if(e.target.name == "premios"){
            this.setState({
                premios: e.target.value
            })
        }else if(e.target.name == "año"){
            this.setState({
                año: e.target.value
            })
        }else if(e.target.name == "actores"){
            this.setState({
                actores: e.target.value
            })
        }else if(e.target.name == "portada"){
            this.setState({
                portada: e.target.value
            })
        }else{
            this.setState({
                trailer: e.target.value
            })
        }
    }

    onSubmit= (e) =>{
        if(this.state.nombre == undefined){
            alert("Ingresa el nombre")
        }
        else if(this.state.clasificacion == undefined){
            alert("Ingresa la clasificacion")
        }
        else if(this.state.duracion == undefined){
            alert("Ingresa la duracion")
        }
        else if(this.state.genero == undefined){
            alert("Ingresa el genero")
        }
        else if(this.state.director == undefined){
            alert("Ingresa el director")
        }
        else if(this.state.sinopsis == undefined){
            alert("Ingresa la sinopsis")
        }
        else if(this.state.premios == undefined){
            alert("Ingresa los premios")
        }
        else if(this.state.año == undefined){
            alert("Ingresa el año")
        }
        else if(this.state.actores == undefined){
            alert("Ingresa los actores")
        }
        else if(this.state.portada == undefined){
            alert("Ingresa la portada")
        }
        else if(this.state.trailer == undefined){
            alert("Ingresa el trailer")
        } 
        else{
            let json = {
                nombre:this.state.nombre,
                clasificacion:this.state.clasificacion,
                duracion:this.state.duracion,
                genero:this.state.genero,
                director:this.state.director,
                sinopsis:this.state.sinopsis,
                premios:this.state.premios,
                año:this.state.año,
                actores:this.state.actores,
                portada:this.state.portada,
                trailer:this.state.trailer

            }
            axios.post("https://pelisdevf.herokuapp.com/api/peliculas/create", json).then(pelicula =>{ 
                console.log(pelicula)
                alert('pelicula creada')
            })
            .catch(err =>{
                console.log(err)
                alert("Lo siento existe un problema")
            })
        } 
    }

    render(){
        return(
            <div ClassName ="App">
            <Navbar/>
            <Header/>
            
            <div id="section">

                <h1>Ingresar Película</h1>

                <form onSubmit = {this.onSubmit}>

                    <input type = "text" placeholder = "nombre" name ="nombre" className="txt"
                    onChange = {this.onInputChange}/>
                    <input type = "text" placeholder = "clasificación" name ="clasificacion" className="txt"
                    onChange = {this.onInputChange}/>
                    <input type = "text" placeholder = "duración" name ="duracion" className="txt"
                    onChange = {this.onInputChange}/>
                    <input type = "text" placeholder = "genero" name ="genero" className="txt"
                    onChange = {this.onInputChange}/>
                    <input type = "number" placeholder = "año" name ="año" className="txt"
                    onChange = {this.onInputChange}/>
                    <input type = "text" placeholder = "director" name ="director" className="txt"
                    onChange = {this.onInputChange}/>
                    <input type = "text" placeholder = "actores" name ="actores" className="txt"
                    onChange = {this.onInputChange}/>
                    <input type = "text" placeholder = "premios" name ="premios" className="txt"
                    onChange = {this.onInputChange}/>
                    <input type = "text" placeholder = "sinopsis" name ="sinopsis" className="txt"
                    onChange = {this.onInputChange}/>
                    <input type = "text" placeholder = "portada" name ="portada" className="txt"
                    onChange = {this.onInputChange}/>
                    <input type = "text" placeholder = "trailer" name ="trailer" className="txt"
                    onChange = {this.onInputChange}/>

                    <input type ="submit" value ="Ingresar" name="submit"/>

                </form>

            </div>

            <Footer/>
            </div>
        )
    }
}

export default Create;