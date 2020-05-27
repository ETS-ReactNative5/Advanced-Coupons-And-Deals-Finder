import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Coupons.css';
import CouponsCard from './CouponsCard';

export default class Coupons extends Component {
    constructor() {
        super();
        this.state = {
            people: [{
                id:1,
                image: require("../assets/images/kids1.jpg"),
                heading: "Prime Deals",
                offer: "Kids Offer- Free Meals for Children ",
                detailsInfo: "Min 25% off at the hottest restaurants"
        
            },
            {
                id:2,
                image: require("../assets/images/best-food.jpg"),
                heading: "50% OFF",
                offer: "Food At best offers on Orders | All users",
                detailsInfo: "Mindblowing 50% off deals in your city"
            },
            {
                id:3,
                image: require("../assets/images/drinks.jpg"),
                heading: "20% OFF on drinks",
                offer: "Flat 20% OFF On Orders | All users",
                detailsInfo: "Enjoy flat 50% off on drinks and sweets"
        
            },
            {
                id:4,
                image: require("../assets/images/best-food.jpg"),
                heading: "50% OFF",
                offer: "Food At best offers on Orders | All users",
                detailsInfo: "Mindblowing 50% off deals in your city"
            },
            {
                id:5,
                image:require("../assets/images/drinks.jpg"),
                heading: "20% OFF on drinks",
                offer: "Flat 20% OFF On Orders | All users",
                detailsInfo: "Enjoy flat 50% off on drinks and sweets"
        
            },
            {
                id:6,
                image: require("../assets/images/kids1.jpg"),
                heading: "Prime Deals",
                offer: "Kids Offer- Free Meals for Children ",
                detailsInfo: "Minimum 25% off at the hottest and most premium restaurants"
        
            }
        
            ]
        }
    }

    removePerson(id) {
        this.setState({ people: this.state.people.filter(person => person.id !== id) });
    }

    render() {
        let peopleCards = this.state.people.map(person => {
            return (  
            
            
            <Col sm="4">
            <CouponsCard key={person.id} removePerson={this.removePerson.bind(this)} person={person} />
          </Col>
        )
      })
      return (
        <Container fluid>
    <span>
    <h3>Coupons For all Food Blogs</h3>
  </span>
  <span>
          <h4>DOORDASH</h4>
        </span>
        <Row>
            {peopleCards}
            </Row>
          
        </Container>
      )
    }
}