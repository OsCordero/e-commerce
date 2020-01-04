import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../../actions/';

import CategoryCard from '../../CategoryCard/CategoryCard';
import './categories.scss';
export class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderCategoriesList() {
    return this.props.categories.map(category => {
      return <CategoryCard key={category.category_id} category={category} />;
    });
  }
  render() {
    return (
      <div className='categories'>
        <div className='categories-header'>
          <h1>Categories:</h1>
        </div>
        <div className='categories-list'>{this.renderCategoriesList()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { categories: state.categories };
};

export default connect(mapStateToProps, { fetchCategories })(Categories);
