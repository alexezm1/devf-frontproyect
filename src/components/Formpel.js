import React, {Component} from 'react';
import './Formpel.css';
import axios from 'axios';

class Formpel extends Component{

   

    render(){
        return(
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
        );
    };
};

export default Formpel;