import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple500, purple700} from 'material-ui/styles/colors';
import OuterFrame from '../containers/outer_frame';

// Define main theme
const mainTheme = getMuiTheme({
  palette: {
    primary1Color: purple500,
    primary2Color: purple700,
    pickerHeaderColor: purple500
  }
});

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={mainTheme}>
        <div>
          <OuterFrame />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
