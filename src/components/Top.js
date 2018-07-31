import React, { Component } from 'react';
import './Top.css';
import busca from './img/busca.jpg';
import mira from './img/mira.jpg';
import califica from './img/califica.jpg';

class Top extends Component {
    render() {
        return (
            <div id='top'>

                <ul>

                    <li>

                        <img src={busca} alt={'busca'} width="100" />
                        <h1>Busca</h1>

                    </li>

                    <li>

                        <img src={mira} alt={'mira'} width="100" />
                        <h1>Mira</h1>

                    </li>

                    <li>

                        <img src={califica} alt={'califica'} width="100" />
                        <h1>Califica</h1>

                    </li>

                </ul>

            </div>
        );
    };
};

export default Top;