import React, { Component } from 'react';
import './Bodpel.css';

class Bodpel extends Component {
    render() {
        return (
            <div id="pelbod">

            <div className="container">

                <div id="infpel">

                    <h1>{this.props.nombre}</h1>
                    <p><img src={this.props.portada} alt="portada" width="200" height="350" />

                        Nombre:  {this.props.nombre}<br />
                        Clasificación:  {this.props.clasificacion}<br />
                        Duración:  {this.props.duracion}<br />
                        Género:  {this.props.genero}<br />
                        Año:  {this.props.año} <br />
                        Director:  {this.props.director} <br />
                        Actores:  {this.props.actores} <br />
                        Premios:  {this.props.premios} <br />

                    </p>
                    <br />
                    <p>
                        Sinópsis:  {this.props.sinopsis}

                    </p>

                    <div id="trailer">

                        <iframe width="700" height="400" src={this.props.trailer} frameborder="0" allowfullscreen></iframe>
                        {/* <h3>Comentarios</h3>
                        {this.props.calificacion} */}

                    </div>

                    

                </div>
                </div>


                <div className="container">
                <div id="formcalif">

                    <h3>Ingresar crítica</h3>

                    <form>

                        <input type="text" placeholder="id usuario"/>
                        <input type="text" placeholder="estrellas" />
                        <input type="text" placeholder="comentarios" />


                        <input type="submit" value="Ingresar" />

                    </form>

                </div>
                </div>

                {/* <div id="trailer">

                    <iframe width="700" height="400" src="https://www.youtube.com/embed/jgMfYgsRvQ8" frameborder="0" allowfullscreen></iframe>
                
                </div> */}

            </div>
        );
    };
};

export default Bodpel;