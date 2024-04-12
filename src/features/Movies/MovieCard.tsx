import { Link } from "react-router-dom";
import style from './MovieCard.module.scss'

interface MovieCardProps {
  id: number;
  title: string;
  popularity: number;
  oveview: string;
}

export default function MovieCard({ id, title, oveview, popularity }: MovieCardProps) {
  return (

    <div className={style.card}>
      <img className={style.thumbnail} src="/plug.jpg" alt="movie thumbnail" />

      <div className={style.content}>
        <div>
          <Link to={`/movies/${id}`}>{title}</Link>
        </div>
        <div className={style.overview}>
          {oveview}
        </div>
        <div className={style.popularity}>
          {popularity}
        </div>
      </div>
    </div>
  )
}
