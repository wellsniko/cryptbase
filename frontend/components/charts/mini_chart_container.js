import { connect } from 'react-redux';
import MiniChart from './mini_chart';

const mapStateToProps = (state, ownProps) => ({
    coinId: ownProps.coinId,
    watchlist: state.entities.watchlist,
    color: ownProps.color,
    state: state,
    coins: state.entities.coins
});


export default connect(mapStateToProps)(MiniChart);


