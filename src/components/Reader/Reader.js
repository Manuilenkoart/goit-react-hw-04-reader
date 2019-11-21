import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

import styles from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    location: PropTypes.shape().isRequired,
    history: PropTypes.shape().isRequired,
  };

  getUrl = () => {
    let url = new URLSearchParams(this.props.location.search).get('item');
    url = Number(url);
    return url;
  };

  onPageChange = category => {
    this.props.history.push({
      ...this.props.location,
      search: `item=${category}`,
    });
  };

  handleIncrement = () => {
    return this.onPageChange(this.getUrl() + 1);
  };

  handleDecrement = () => {
    return this.onPageChange(this.getUrl() - 1);
  };

  render() {
    const pageNumber = this.getUrl();
    const { items } = this.props;

    return (
      <>
        {pageNumber >= 1 && pageNumber <= items.length && (
          <div className={styles.reader}>
            <Controls
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              currentPage={pageNumber}
              lastPage={items.length}
            />
            <Counter lastPage={items.length} currentPage={pageNumber} />
            <Publication
              currentPublication={items[pageNumber - 1]}
              currentPage={pageNumber}
            />
          </div>
        )}
      </>
    );
  }
}
