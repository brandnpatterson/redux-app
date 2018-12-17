import React, { Component } from 'react';
import { array, func } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchUsers } from './actions';

import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import Users from './components/Users';

const propTypes = {
  fetchUsers: func.isRequired,
  users: array.isRequired
};

class App extends Component {
  state = {
    loading: false
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { loading } = this.state;
    const { users } = this.props;

    return (
      <StyledApp>
        <Header message="Hello React Env" />
        {loading ? (
          <Loading />
        ) : (
          <div>
            <h2>Users List</h2>
            <ul>
              <Users users={users} />
            </ul>
          </div>
        )}
        <img src="patterson-family.jpg" alt="Patterson Family" />
        <Footer />
      </StyledApp>
    );
  }
}

const StyledApp = styled.div`
  border: 1px dashed black;
`;

App.propTypes = propTypes;

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = { fetchUsers };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
