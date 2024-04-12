import { Action, Reducer } from "redux";

export interface Movie {
  id: number;
  title: string;
  popularity: number;
  oveview: string;
}

interface MovieState {
  top: Movie[];
}

const initialState: MovieState = {
  top: [
    {id: 1, title: "Inception", popularity: 98, oveview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"},
    {id: 2, title: "Inception2", popularity: 97, oveview: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id: 3, title: "Inception3", popularity: 96, oveview: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem "},
  ]
}

const moviesReducer: Reducer<MovieState, Action> = (state, action) => {
  return initialState;
};

export default moviesReducer;