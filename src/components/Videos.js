import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

export default function Videos() {
  const [ page, setPage ] = useState(1);
  const { loading, err, videos, hasMore } = useVideoList(page);
  console.log("Page...: ", page);

  return (
    <div>
      {/* videos.length > 0 && */}
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
        >
          {videos.map((video) => (
            <Link to="/quiz" key={video.youtubeID}>
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            </Link>
          ))}
        </InfiniteScroll>
      )}
      {/* videos.length === 0 && */}
      {!loading && <div> No Data Found </div>}
      {err && <div> there is an error </div>}
      {loading && <div> Content Loading.... </div>}
    </div>
  );
}
