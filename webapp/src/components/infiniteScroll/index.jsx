import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class InfiniteScroll extends PureComponent {
  state = {
    page: 0,
  };

  handleScroll = event => {
    const { onScrollToBottom, loading, hasMoreItems } = this.props;
    const { page } = this.state;
    if (
      event.target.scrollHeight - event.target.scrollTop < event.target.clientHeight + 30
      && !loading && hasMoreItems
    ) {
      onScrollToBottom(page);
      this.setState({ page: page + 1 });
    }
  };

  render() {
    const { children } = this.props;
    return (
      <div className="infinite-scroll-zone" onScroll={this.handleScroll}>
        {children}
      </div>
    );
  }
}

InfiniteScroll.propTypes = {
  onScrollToBottom: PropTypes.func,
  pageSize: PropTypes.num,
};
InfiniteScroll.defaultPops = {
  onScrollToBottom: () => {},
  pageSize: 10,
};

const mapStateToProps = state => ({
  loading: state,
  hasMoreItems: state,
});

export default connect(
  mapStateToProps,
  null,
)(InfiniteScroll);
