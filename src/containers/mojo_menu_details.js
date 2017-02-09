import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAppBarLeftButton, AppBarLeftButtonType } from '../actions/index';

class MojoMenuDetails extends Component {

  componentWillMount() {
    this.props.updateAppBarLeftButton(AppBarLeftButtonType.NAV_BACK);
  }

  render() {
    const menuData = this.props.menuDataMap[this.props.params.menuId];
    return (
      <div className='mojoMenuDetailsContainer'>
        <span className='mojoMenuDetailsCategoryText'>{menuData.category}</span>
        <div className='mojoMenuDetailsContent'>
          <div className='mojoMenuDetailsImage' style={{ backgroundImage: `url(${menuData.imageUrl})` }} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.getIn(['loadDataState', 'loading']),
    menuDataMap: state.getIn(['loadDataState', 'menuDataMap']),
    toppingDataMap: state.getIn(['loadDataState', 'toppingDataMap'])
  };
}

export default connect(mapStateToProps, { updateAppBarLeftButton })(MojoMenuDetails);
