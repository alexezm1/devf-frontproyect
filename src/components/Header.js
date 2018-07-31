import React, {Component} from 'react';
import './Header.css';
import gato from './img/github.jpg';

class Header extends Component{
    render(){
        return(
            <div id="header">

                <div id="logo">ALEJANDROS'S</div>

                <div id="icon1" className="redes"><a href="https://github.com/alejandrogalaviz"><img src={gato} alt={'busca'} width="75" /></a></div>
                <div id="icon2" className="redes"><a href="https://github.com/alexezm1"><img src={gato} alt={'busca'} width="75" /></a></div>

            </div>

        )
    }
}

export default Header;