
import React, {Component} from 'react';
import { Button} from 'react-bootstrap';
import './News.css';
function NewsInfo(props){
    const newsContent = props.newsInfo.map((news, index) => 
        <NewsDetails news={news} key={news.id} />
    )

    return(
        <div className="newsInfo">
        {newsContent}
        </div>
    )
}

function NewsDetails(props){
    const news = props.news;
    return(
        <div className="row">
        <div className="col-6">
            <div className="card w-55 shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-body">

                    <div className="newsImage float-left" >
                        <img src={news.picture} style={{height: 200, width:200}} alt="News Image" />
                    </div>
                    <div>
                        <span className="heading">{news.head}</span>
                       <br />
                        <span className="news">
              {news.news}
            </span><br />
                        <span> 
                        <Button type="submit" variant="outline-info">
                <a href="{news.details}">
                  Read more at</a></Button>{' '}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
       
    )


}
export default class News extends Component {
    render(){
         const newsInfo = [
              {
        id:1,
        picture: require("../assets/images/corono.jpg"),
        head: "Dineout launches vouchers to offer financial support to Indian restaurants amidst Covid-19 crisis",
        news: "These vouchers available in Rs 1,000 denominations would help support restaurants, as Dineout will transfer the funds to the restaurants at no additional charges to ensure that they continue to receive the crucial cash-flow needed to survive these trying times, while food-lovers get discounted coupons from their favourite eateries in town.",
        details: "https://economictimes.indiatimes.com/industry/services/hotels-/-restaurants/dineout-launches-vouchers-to-offer-financial-support-to-indian-restaurants-amidst-covid-19-crisis/articleshow/74812024.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"
      },
      {
        id:2,
        picture: require("../assets/images/food-news.jpg"),
        head: "Food deliveries hit as apps grapple with restrictions in Pune",
        news: "PUNE: Home deliveries of essential items have started to falter despite a government notification that permits delivery of food and other items.The lockdown has left restaurants, groceries and other stores short on manpower. Many shops have limited working hours to slots from 7am to 11am and 4pm to 9pm. About 85% of restaurants across the city have stopped home deliveries altogether.",
        details: "https://timesofindia.indiatimes.com/city/pune/food-deliveries-hit-as-apps-grapple-with-restrictions/articleshow/74819123.cms"
      }
            ];
        return (
            
 
    
            
    

    <div className="container-fluid">
    <div>
        <span className="scrollbar">
      <marquee behavior="scroll" direction="right">Coronavirus outbreak: How safe is your food
        Last updated on - Mar 19, 2020, 21:00 IST
      </marquee>
    </span>
    </div>
     <NewsInfo  newsInfo={newsInfo}/>
    </div>
        )
    }
}