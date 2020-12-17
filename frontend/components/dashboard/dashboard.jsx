import React from 'react';
import { Link } from 'react-router-dom';

import WalletIndexItem from './wallet_index_item';
import OrderIndexItem from './order_index_item';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchCoins();
  }

  render() {
    if (!this.props.currentUser) {
      return <> </> 
    }
    const { coins, currentUser, ordersArray} = this.props;

    // const allocationCalc = ()=> {
    
    //   let totalValue = Object.values(props.wallets).map((wallet, idx) => (
    //     wallet.quantity * props.coins.find(coin => coin.id === wallet.coin_id).current_value))
        
    //     return totalValue   
    // }

    const wallets = currentUser.wallets
    return (
        <div className="main-user-page">
          <div className="main-user-page-2">
                <div className="dashboard-body">
                  <div className="dashboard-body-2">
                  <div className="dashboard-body-left">
                    {/* <div className="dashboard-left-down-1">
                      <div className="dashboard-left-chart">
                        <div className="chart-box">
                        
                        </div>
                        </div>
                          </div> */}
                          <div className="dashboard-left-down-2">
                              <div className="your-assets-1">
                                <div className="your-assets-top">
                                  <h2 className="your-assets-header">Your Assets</h2>





                      <table id="price-table">
                        <thead id="t2-head">
                          <tr id="t2-head-row">
                            <th className="t2-h1"> <div className="div-t2-h1"><label className="label-t2-h1">Asset</label></div> </th>
                            <th className="t2-h1"><div className="div-t2-h1"><label className="label-t2-h1">Balance</label></div></th>
                            <th className="t2-h1"><div className="div-t2-new-h"><label className="label-t2-h1">Allocation</label></div></th>
                          </tr>
                        </thead>
                        <tbody className="coin-table-body">  


                              <tr className="price-index-row">
                              <td className="t2-r1"> 
                                
                                  
                                    <div className="div-t2-usd" > 
                                    <h3 className="index-image-2">$</h3>
                                      <label style={{color: `black`}}>&nbsp;&nbsp;&nbsp;US Dollar&nbsp;&nbsp;</label>
                                      
                                    </div>
                               
                              </td>

                              <td className="t2-r1"> <div className="div-t2-r1"><label className="label-t2-r1">
                                <div className="div-t2-r1" > 
                                      <label style={{color: `black`}}>{(wallets.usd.quantity * 1).toLocaleString('en-US', {style: 'currency',currency: 'USD'})}&nbsp;&nbsp;</label>
                                      <label style={{color: `rgba(17, 51, 83, 0.6)`}}>&nbsp;USD</label>
                                    </div>
                                  </label>
                                </div> 
                              </td>
                              <td className="t2-r1">
                                  <div className="div-t2-new">
                                      <label className="label-t2-r1" >
                                    Temporary%

                                      </label>
                                  </div> 
                              </td>

                            </tr>
                          {Object.values(wallets).map((wallet, idx) => (
                            <WalletIndexItem wallet={wallet} key={idx} id={idx} wallets={wallets} coins={coins} coin={coins.find(o => o.id === wallet.coin_id)}/>
                          ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-body-right">
                         <div className="order-list">
                           <div className="order-header-div">
                             <h3 className="order-header-h3">
                               Recent Transactions
                             </h3>
                           </div>
                           <div className="order-body-div-1">
                             <div className="order-body-div-2">
                                  <div>
                                    {ordersArray.map((order, idx) => (  
                                      <OrderIndexItem order={order} key={idx}/>
                                      ))}

                                  </div>
                             </div>
                           </div>
                         </div>
                  </div>
              </div>  
           </div>
          </div>
        </div>
        
            
       
    )
  }
}

export default Dashboard;