import React from 'react';
import { Link, withRouter } from 'react-router-dom';


/*
Export a `ReportIndexItem` presentational component that takes in a `report`
and the `deleteReport` action via props. The component should render an `li`
containing the following:

1. A link to the report's show page with text of the report's date created
2. A link to the report's edit page with text 'Edit'.
3. A button to delete the report.

Use the `formatDate` function to display `createdAt` in this component. Like
this: `formatDate(report.createdAt)`.
*/

/* <Link to={`/coins/${props.coin.id}`}>{props.coin.symbol}</Link> */

const CoinIndexItem = props => (
  <li className="coin-index-item">
    
    {props.coin.symbol} &nbsp;&nbsp;{props.coin.name}
  </li>
);

export default CoinIndexItem;

