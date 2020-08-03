import React from 'react';
import {
  arrayOf, func, shape, string,
} from 'prop-types';

import { connect } from 'react-redux';

import UauList from '../components/molecules/UauList';

import ItemsTemplate from '../components/templates/ItemsTemplate';

import { removeMovie } from '../redux/actions';
import { getMoviesList } from '../redux/selectors';

const UauPage = ({ movies, ...props }) => (
  <ItemsTemplate
    title="Lista de filmes UAU"
    items={(
      <UauList
        actionLabel="Remover"
        handleItemClick={(item) => props.removeMovie(item)}
        items={movies}
      />
    )}
  />
);

UauPage.defaultProps = {
  movies: [],
  removeMovie: () => {},
};

UauPage.propTypes = {
  movies: arrayOf(shape({
    imdbID: string,
    Title: string,
  })),
  removeMovie: func,
};

const mapStateToProps = (state) => ({ movies: getMoviesList(state) });

export default connect(mapStateToProps, { removeMovie })(UauPage);
