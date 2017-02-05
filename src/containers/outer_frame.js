import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMainDrawer, hideMessage } from '../actions/index';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';

class OuterFrame extends Component {

  constructor(props) {
    super(props);
    this.handleMainDrawerToggle = this.handleMainDrawerToggle.bind(this);
    this.handleSnackbarActionTap = this.handleSnackbarActionTap.bind(this);
  }

  handleMainDrawerToggle() {
    this.props.toggleMainDrawer();
  }

  handleSnackbarActionTap() {
    this.props.hideMessage();
  }

  render() {
    return (
      <div>
        <AppBar
          title='Mojo Teahouse'
          onLeftIconButtonTouchTap={this.handleMainDrawerToggle} />
        <Drawer
          docked={false}
          open={this.props.mainDrawerOpen}
          onRequestChange={this.handleMainDrawerToggle}>
          <div className='mainDrawerHeaderContainer'>
            <img className='mainDrawerHeaderImage' src={require('../../resources/images/mojo_header.jpg')} />
            <p className='mainDrawerHeaderTitle'>Mojo Teahouse</p>
          </div>
          <Divider />
          <MenuItem className='mainDrawerMenuItem' primaryText='Menu'/>
          <MenuItem className='mainDrawerMenuItem' primaryText='About'/>
        </Drawer>
        <Snackbar
          open={this.props.showMessage}
          message={this.props.message}
          action='Dismiss'
          onActionTouchTap={this.handleSnackbarActionTap}
          autoHideDuration={4000} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mainDrawerOpen: state.mainDrawerState.get('mainDrawerOpen'),
    showMessage: state.messageState.get('showMessage'),
    message: state.messageState.get('message')
  };
}

export default connect(mapStateToProps, { toggleMainDrawer, hideMessage })(OuterFrame);
