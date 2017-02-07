import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAllData } from '../actions/index';
import _ from 'lodash';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import TouchRipple from 'material-ui/internal/TouchRipple';
import Subheader from 'material-ui/Subheader';
import { Grid, Row, Col } from 'react-bootstrap/lib';

class MojoMenu extends Component {

  constructor(props) {
    super(props);
    this.renderAllMenus = this.renderAllMenus.bind(this);
  }

  componentDidMount() {
    this.props.loadAllData();
  }

  renderAllMenus() {
    if (this.props.data && this.props.data.menu) {
      const menuDataDict = this.props.data.menu;
      const categoryMap = {};
      // Filter by category
      const sortedCategorySet = _.sortBy(_.uniq(_.map(menuDataDict, 'category')));
      _.each(sortedCategorySet, (category) => {
        categoryMap[category] = [];
      });
      _.forOwn(menuDataDict, (menuData, menuId) => {
        categoryMap[menuData.category].push(menuData);
      });

      return sortedCategorySet.map((category) => {
        return (
          <div key={category}>
            <Subheader className='mojoMenuCategoryHeader'>
              {category}
            </Subheader>
            {this.renderCategoryMenuList(category, categoryMap[category])}
          </div>
        );
      });
    }
  }

  renderCategoryMenuList(category, categoryMenuList) {
    const cols = [];
    categoryMenuList.map((menuData) => {
      cols.push(
        <Col
          key={menuData.id}
          xs={12} sm={6} md={4} lg={3}
          className='mojoMenuCardContainer'>
          <Card className='mojoMenuCard'>
            <TouchRipple style={{ zIndex: 100 }}>
              <CardMedia>
                <div className='mojoMenuImage' style={{ backgroundImage: `url(${menuData.imageUrl})` }}>
                  <img className='mojoMenuNewTagImage' src={menuData.isNewMenu ? require('../../resources/images/new_tag.png') : ''} />
                </div>
              </CardMedia>
              <CardTitle
                title={menuData.name}
                titleStyle={{ fontSize: '16px' }}
                subtitle={menuData.chineseName}
                subtitleStyle={{ fontSize: '14px' }} />
            </TouchRipple>
          </Card>
        </Col>
      );
    });

    return (
      <Row>
        {cols}
      </Row>
    );
  }

  render() {
    return (
      <div className='mojoMenuContainer'>
        {this.props.loading
          ? (<CircularProgress className='loadingProgressBar' size={100} thickness={7} />)
          : (
            <Grid className='mojoMenuListContainer'>
              {this.renderAllMenus()}
            </Grid>
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.getIn(['loadDataState', 'loading']),
    data: state.getIn(['loadDataState', 'data'])
  };
}

export default connect(mapStateToProps, { loadAllData })(MojoMenu);
