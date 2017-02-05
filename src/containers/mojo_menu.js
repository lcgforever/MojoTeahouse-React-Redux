import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAllData } from '../actions/index';
import _ from 'lodash';
import CircularProgress from 'material-ui/CircularProgress';
import { GridList, GridTile } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import TouchRipple from 'material-ui/internal/TouchRipple';

class MojoMenu extends Component {

  constructor(props) {
    super(props);
    this.renderMenuList = this.renderMenuList.bind(this);
  }

  componentDidMount() {
    this.props.loadAllData();
  }

  renderMenuList() {
    if (this.props.data && this.props.data.menu) {
      const menuDataDict = this.props.data.menu;
      return _.map(Object.keys(menuDataDict), (menuId) => {
        const menuData = menuDataDict[menuId];
        return (
          <GridTile
            key={menuId}
            className='mojoMenuGridTile'
            onTouchTap={() => { console.log('test touch!') }}>
            <Card>
              <TouchRipple style={{ zIndex: 100 }}>
                <CardMedia>
                  <div className='mojoMenuImage' style={{ backgroundImage: `url(${menuData.imageUrl})` }} />
                </CardMedia>
                <CardTitle
                  title={menuData.name}
                  titleStyle={{ fontSize: '16px' }}
                  subtitle={menuData.chineseName}
                  subtitleStyle={{ fontSize: '14px' }} />
              </TouchRipple>
            </Card>
          </GridTile>
        );
      });
    }
  }

  render() {
    return (
      <div className='mojoMenuContainer'>
        {this.props.loading
          ? (<CircularProgress className='loadingProgressBar' size={100} thickness={7} />)
          : (
            <GridList
              className='mojoMenuListContainer'
              cols={4}
              cellHeight={300}>
              {this.renderMenuList()}
            </GridList>
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loadDataState.get('loading'),
    data: state.loadDataState.get('data')
  };
}

export default connect(mapStateToProps, { loadAllData })(MojoMenu);
