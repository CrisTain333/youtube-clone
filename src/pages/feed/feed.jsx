import { useContext, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoCard from "../../components/VideoCard/VideoCard";
import { Context } from "../../context/contextApi";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document
      .getElementById("root")
      .classList.remove("custom-h");
  }, []);
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <Sidebar />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            searchResults.map((item, i) => {
              if (item.type !== "video") return false;
              return (
                <VideoCard
                  key={i}
                  video={item?.video}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
