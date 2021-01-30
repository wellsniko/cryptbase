import React from 'react';

const CoinNewsItem = props => {

  return (
    <article id="news-article">

        <div id="news-div-1">
          <div id="news-title-link">
              <h3 id="news-title-h3">{props.story.title}</h3>
          </div>
          <div>{new Date(props.story.published_at).toLocaleString("en-US", {day: "numeric", month: "numeric", year: "numeric", hour: "numeric", minute: "numeric"})}</div>
        </div>
        
        <a id="news-photo-link" target="_blank" href={`${props.story.url.slice(0,38)}click/`}>
          Source
        </a>
    </article>

)};

export default CoinNewsItem;

