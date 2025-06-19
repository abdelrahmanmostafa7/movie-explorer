const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-2 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-3">
            About <span className="text-red-500">IMDb</span> Clone
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to IMDB Clone! This app is designed to provide users with
              a comprehensive database of movies, TV shows, and entertainment
              content. Our goal is to offer a seamless and enjoyable experience
              for movie enthusiasts and casual viewers alike.
            </p>

            <p>
              On IMDB Clone, you&apos;ll find detailed information about your
              favorite movies and TV shows, including cast and crew details,
              plot summaries, user reviews, and ratings. We strive to keep our
              database up-to-date with the latest releases and trending content.
            </p>

            <p>
              This website is created using{" "}
              <span className="text-red-500">Next.js</span> (App Router),
              <span className="text-red-500">TypeScript</span>,
              <span className="text-red-500">Tailwind CSS</span> for styling,
              <span className="text-red-500">Clerk</span> for authentication,
              <span className="text-red-500">Zustand</span> for state
              management,
              <span className="text-red-500">Axios</span> for data fetching, and{" "}
              <span className="text-red-500">TMDb API</span> to retrieve movie
              data. It is fully responsive and optimized for performance using
              SSR/SSG techniques. This project was built as part of the{" "}
              <span className="font-semibold">El Mal task</span>, showcasing
              modern web development practices and clean UI/UX design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page