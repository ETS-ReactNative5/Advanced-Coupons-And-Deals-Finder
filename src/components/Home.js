
import React, {Component} from 'react';
import  './Home.css';

export default class Home extends Component {
    render(){
        return (
      
    <div className="container-fluid">

    <div className="row">
        <div className="col">
            <div className="main">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <div className="card bg-light">
              
                            <a href="/order">
                            <img className="card-img-top" src={require('../assets/logos/swiggy.png')} alt="Card image cap" />
                            </a>
                            <div className="card-body">
                                <p className="card-text"><span className="name12">Swiggy</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card bg-light">
                            <a href="/order"><img className="card-img-top" src={require('../assets/logos/Zomato_logo.png')} alt="Card image cap" />
                            </a>
                            <div className="card-body">
                                <p className="card-text"><span className="name12">Zomato</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card bg-light">
                            <a href="/order"><img className="card-img-top" src={require('../assets/logos/Deliveroo_logo.png')} alt="Card image cap" />
                            </a>
                            <div className="card-body">
                                <p className="card-text"><span className="name12">Deliveroo</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card bg-light">
                            <a href="/order"><img className="card-img-top" src={require('../assets/logos/UberEats_logo.png')} alt="Card image cap" />
                            </a>
                            <div className="card-body">
                                <p className="card-text"><span className="name12">UberEats</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card bg-light">
                            <a href="/order"><img className="card-img-top" src={require('../assets/logos/DoorDash_logo.png')} alt="Card image cap" />
                            </a>
                            <div className="card-body">
                                <p className="card-text"><span className="name12">DoorDash</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col">
            <div className="line">
                <span>Latest offers, Best dishes</span>
            </div>
        </div>
    </div>

    <div className="row">

        <div className="col-6">
            <div className="card " style={{width: 611.2}}>
                <img className="card-img-top" src={require('../assets/logos/bg.png')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <p className="card-line">Best food application for serving people</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 304}}>
                <img className="card-img-top" src={require('../assets/images/donuts-2969490_1920.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">A balanced diet is having a cupcake in each hand. A great poster for cake lovers everywhere.</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 224}}>
                <img className="card-img-top" src={require('../assets/images/talkingFood.jpg')} style={{width: 14,height: 14}} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">The next best thing to eating food, is talking about it.</p>
                </div>
            </div>
        </div>

    </div>
</div>
            
 
        )
    }
}