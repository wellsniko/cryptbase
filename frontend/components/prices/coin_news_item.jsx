import React from 'react';
import { Link, withRouter } from 'react-router-dom';

{/* <Link to={`/price/${props.coin.id}`}></Link> */}


const CoinNewsItem = props => {

  const numConverter = (num) => {

    return Math.abs(Number(num)) >= 1.0e+9
    ? "$" +(Math.abs(Number(num)) / 1.0e+9).toFixed(1) + "B"
    : Math.abs(Number(num)) >= 1.0e+6
    ? "$" +(Math.abs(Number(num)) / 1.0e+6).toFixed(1) + "M" : Math.abs(Number(num)) >= 1.0e+3
    ? "$" +(Math.abs(Number(num)) / 1.0e+3).toFixed(1) + "K"
    : Math.abs(Number(num));
}

  const colorChooser = (percentage)=> {
    return percentage >= 0 ? {color:`rgb(5, 177, 105)`} : {color:`rgb(223, 95, 103)`};
  }

  // const changeBackground = (e) => {
  //   e.target.style.background = 'red';
  // }
console.log(props)
  // const removeBackground = (e) => {
  //   e.target.style.background = 'none';
  // }

return (
  <article id="news-article">

      <div id="news-div-1">
        <Link id="news-title-link">
            <h3 id="news-title-h3">{props.story.title}</h3>
        </Link>
        
      </div>

      <Link id="news-photo-link">
        
      </Link>
  </article>

)};

export default CoinNewsItem;

