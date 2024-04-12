import { connect } from "react-redux";
import { Movie } from "../../reducers/movies";
import { RootState } from "../../store/store";
import MovieCard from "./MovieCard";

import styles from './Movies.module.scss';

interface MoviesProps {
  movies: Movie[]
}
function Movies({ movies }: MoviesProps) {
  return (
    <section>
      <div className={styles.list}>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            oveview={movie.oveview}
            popularity={movie.popularity}
          />
        ))}
      </div>
    </section>
  )
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top
})
const conector = connect(mapStateToProps);

export default conector(Movies)