import React, { FC } from "react";
import { useAppSelector } from "../../app/hooks";
interface Props {}

const Bookmarks: FC<Props> = (props) => {
  const { bookmarks } = useAppSelector((state) => state.bookmark);
  console.log(bookmarks);
  return (
    <div className="card bookmark-body d-flex align-items-center">
      {bookmarks.map((bookmark) => (
        <div
          className="card bookmark-container d-flex justify-content-between align-items-center"
          key={bookmark.id}
        >
          <div>
            <img
              src={bookmark.image}
              alt={bookmark.title}
              className="bookmark-img"
            />
          </div>
          <div>
            <h1>{bookmark.title}</h1>
            <p>{bookmark.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Bookmarks;
