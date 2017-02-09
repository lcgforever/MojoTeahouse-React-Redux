import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { hideMessage, AppBarLeftButtonType } from '../actions/index';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import DrawerMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import mojoHeaderImage from '../../resources/images/mojo_header.jpg';

class OuterFrame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mainDrawerOpen: false
    };
    this.handleAppBarLeftButtonTap = this.handleAppBarLeftButtonTap.bind(this);
    this.handleMainDrawerToggle = this.handleMainDrawerToggle.bind(this);
    this.handleSnackbarActionTap = this.handleSnackbarActionTap.bind(this);
    this.renderAppBarLeftButton = this.renderAppBarLeftButton.bind(this);
  }

  handleAppBarLeftButtonTap() {
    switch (this.props.appBarLeftButtonType) {
      case AppBarLeftButtonType.NAV_BACK:
      browserHistory.goBack();
      break;

      case AppBarLeftButtonType.DRAWER:
      default:
      this.handleMainDrawerToggle();
      break;
    }
  }

  handleMainDrawerToggle() {
    this.setState({
      mainDrawerOpen: !this.state.mainDrawerOpen
    });
  }

  handleSnackbarActionTap() {
    this.props.hideMessage();
  }

  renderAppBarLeftButton() {
    switch (this.props.appBarLeftButtonType) {
      case AppBarLeftButtonType.NAV_BACK:
      return <NavigationBack />

      case AppBarLeftButtonType.DRAWER:
      default:
      return <DrawerMenu />
    }
  }

  render() {
    return (
      <div>
        <AppBar
          title='Mojo Teahouse'
          iconElementLeft={
            <IconButton>
              {this.renderAppBarLeftButton()}
            </IconButton>
          }
          onLeftIconButtonTouchTap={this.handleAppBarLeftButtonTap} />
        <Drawer
          docked={false}
          open={this.state.mainDrawerOpen}
          onRequestChange={this.handleMainDrawerToggle}>
          <div className='mainDrawerHeaderContainer'>
            <img className='mainDrawerHeaderImage' src={mojoHeaderImage} />
            <p className='mainDrawerHeaderTitle'>Mojo Teahouse</p>
          </div>
          <Divider />
          <Link to='/'>
            <MenuItem className='mainDrawerMenuItem' primaryText='Menu' onTouchTap={this.handleMainDrawerToggle} />
          </Link>
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
    message: state.getIn(['messageState', 'message']),
    appBarLeftButtonType: state.getIn(['appBarState', 'appBarLeftButtonType'])
  };
}

export default connect(mapStateToProps, { hideMessage })(OuterFrame);
