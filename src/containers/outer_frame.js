import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideMessage } from '../actions/index';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';

class OuterFrame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mainDrawerOpen: false
    };
    this.handleMainDrawerToggle = this.handleMainDrawerToggle.bind(this);
    this.handleSnackbarActionTap = this.handleSnackbarActionTap.bind(this);
  }

  handleMainDrawerToggle() {
    this.setState({
      mainDrawerOpen: !this.state.mainDrawerOpen
    });
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
          open={this.state.mainDrawerOpen}
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
    showMessage: state.getIn(['messageState', 'showMessage']),
    message: state.getIn(['messageState', 'message'])
  };
}

export default connect(mapStateToProps, { hideMessage })(OuterFrame);
