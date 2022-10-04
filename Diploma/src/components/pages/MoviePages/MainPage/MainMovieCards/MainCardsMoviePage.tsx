import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Footer } from "../../../../Footer/Footer";
import { increment, decrement } from '../../../../../store/slices/counterSlice';
import { CardProps } from "./mainCardTypes";

import iconThumbsUp from "../../../../../images/IconsFetch/iconThumbsUp.svg";
import iconThumbsDown from "../../../../../images/IconsFetch/iconThumbsDown.svg";
import iconBookmark from "../../../../../images/IconsFetch/bookmark.svg";

import './mainCardsMoviePageStyle.css';



export function MainCards({
  id,
  image,
  title,
  year,

}: CardProps) {
  const like = useSelector((state: any) => state.counter.count);
  const dislike = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  const data = useSelector((state: any) => state.postsMovie.postData);
  console.log(data);


  return (
    <div className="cardsWrapper">
      <Link to={`/Movie_Details/${id}`}><img className="movieCardsImg" src={image} /></Link>
      <Link to={`/Movie_Details/${id}`}><h3 className="movieCardsTitle">{title}</h3></Link>
      <h4 className="cardYear">{year}</h4>
      {/* <div className="buttonWrapper">
        <div className="like_dislike">
          <div className="cardLike"
            onClick={() => {
              dispatch(increment());
            }}
          >
            <div>{like}</div>
            <img src={iconThumbsUp} alt="Like"></img>
          </div>
          <div className="cardDislike"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            <div>{dislike}</div>
            <img src={iconThumbsDown} alt="Dislike"></img>
          </div>
        </div>
        

      </div> */}

      <div className="cardBookmark"

        >
          <img src={iconBookmark} alt="Bookmark" />
        </div>
    </div>
  );
};
