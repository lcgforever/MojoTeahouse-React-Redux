import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { loadAllData } from '../actions/index';

class MojoMenu extends Component {

  componentDidMount() {
    this.props.loadAllData();
  }

  render() {
    return (
      <div className='mojoMenuContainer'>
        {this.props.loading
          ? (<CircularProgress className='loadingProgressBar' size={100} thickness={7} />)
          : (
            <div className='mojoMenuContent'>
              <h1>test data</h1>
            </div>
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(JSON.stringify(state.loadDataState.get('data')));
  return {
    loading: state.loadDataState.get('loading'),
    data: state.loadDataState.get('data')
  };
}

export default connect(mapStateToProps, { loadAllData })(MojoMenu);
