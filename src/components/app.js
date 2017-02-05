import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import OuterFrame from '../containers/outer_frame';

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <OuterFrame />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
