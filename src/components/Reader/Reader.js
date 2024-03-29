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

  componentDidMount() {
    const { items, history, location } = this.props;

    const pageNumber = this.getUrl();

    if (!pageNumber || pageNumber > items.length) {
      history.replace({
        ...location.pathname,
        search: 'item=1',
      });
    }
  }

  getUrl = () => {
    let url = new URLSearchParams(this.props.location.search).get('item');
    url = Number(url);
    return url;
  };

  onPageChange = itemNumber => {
    this.props.history.push({
      ...this.props.location.pathname,
      search: `item=${itemNumber}`,
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
        {pageNumber > 0 && pageNumber <= items.length && (
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
