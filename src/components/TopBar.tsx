import TobItems from "./TopItems";
const TopBar = () => {
  return (
    <div className="">
      <div className="flex lg:text-xl justify-center gap-6">
        <TobItems title="Trending" param="trending" />
        <TobItems title="Top Rated" param="top_rated" />
      </div>
    </div>
  );
}

export default TopBar