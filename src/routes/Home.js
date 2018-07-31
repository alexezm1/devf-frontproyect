import React, {Component} from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Top from '../components/Top';
import Navbar from '../components/Navbar';
import '../App.css'
import axios from 'axios';



class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculas: []
        }
    }
    
    updatePeliculas(){
        if(this.state.peliculas.length == 0){
            <div>Cargando...</div>
        }
        else{
            let pelis = this.state.peliculas.map((elem,ix,arr)=>{
                return <Card nombre = {elem.nombre} portada = {elem.portada} sinopsis = {elem.sinopsis} uid={elem._id}/>
            })
            return pelis
        }
        
    }

    componentDidMount(){
        axios.get('https://pelisdevf.herokuapp.com/api/peliculas')
            .then(response =>{
                this.setState({
                    peliculas: response.data
                })
            })
            .catch(err =>{
                console.log(err)
            })
    }

    render(){
        return(
            <div ClassName ="App">
            <Navbar/>
            <Header/>
            <Top/>
            <div clasName="row">
            <div className="d-flex flex-wrap justify-content-center">
            
                {this.updatePeliculas()}
            </div>
            </div>
            <Footer/>
            </div>
        )
    }
}

export default Home;