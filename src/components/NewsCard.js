import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBlock,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';
import './News.css';

export default class NewsCard extends Component {
    constructor(props) {
        super(props);
      }
      render () {
        let { id, picture, head, news, details } = this.props.person;
        return (
          
            <div>
            <div className="card w-55 shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body">
            <div className="newsImage float-left" >
                        <img src={picture} style={{height: 200, width:200}} alt="News Image" />
                    </div>
                    <div>
                        <span className="heading">{head}</span>
                       <br />
                        <span className="news">
                        {news}
            </span><br />
            <span> 
                    
                <a href={details} class="btn btn-outline-primary stretched-link">
                  Read more at</a></span>
                    </div>
               
              </div>
            </div>
          </div>
        )
      }
    }