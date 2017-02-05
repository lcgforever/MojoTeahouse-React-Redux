import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMainDrawer } from '../actions/index';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';

const MENU_ITEM_STYLE = {
  paddingLeft: '8px',
  paddingRight: '8px',
  fontSize: '16px'
};

class OuterFrame extends Component {

  constructor(props) {
    super(props);
    this.handleMainDrawerToggle = this.handleMainDrawerToggle.bind(this);
  }

  handleMainDrawerToggle() {
    this.props.toggleMainDrawer();
  }

  render() {
    return (
      <div>
        <AppBar
          title='Mojo Teahouse'
          onLeftIconButtonTouchTap={this.handleMainDrawerToggle}
          />
        <Drawer
          docked={false}
          open={this.props.mainDrawerOpen}
          onRequestChange={this.handleMainDrawerToggle}>
          <div className='mainDrawerHeaderContainer'>
            <img className='mainDrawerHeaderImage' src={require('../../resources/images/mojo_header.jpg')} />
            <p className='mainDrawerHeaderTitle'>Mojo Teahouse</p>
          </div>
          <Divider />
          <MenuItem style={MENU_ITEM_STYLE} primaryText='Menu'/>
          <MenuItem style={MENU_ITEM_STYLE} primaryText='About'/>
        </Drawer>
        <Snackbar
          open={this.props.showErrorMessage}
          message={this.props.errorMessage}
          autoHideDuration={4000}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mainDrawerOpen: state.mainDrawerState.get('mainDrawerOpen'),
    showErrorMessage: state.errorMessageState.get('showErrorMessage'),
    errorMessage: state.errorMessageState.get('errorMessage')
  };
}

export default connect(mapStateToProps, { toggleMainDrawer })(OuterFrame);
