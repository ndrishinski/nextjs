import React from 'react';
import data from '../data/data.json'

import './index.css';
import Card from './Card';

export default class Index extends React.Component {
    static async getInitialProps () {
        return { cards: data }
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src="/static/logo.png" 
                        className="static-logo" alt="logo"
                    />
                </header>
                <div className="Grid">
                    {
                        this.props.cards.map((item) => {
                            return (
                                <Card key={item.id} />
                            ) 
                        })
                    }
                </div>
            </div>
        )
    }
}