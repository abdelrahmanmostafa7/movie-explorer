export type Result = {
  id: string | number;
  backdrop_path?: string;
  poster_path?: string;
  title?: string;
  name?: string;
  overview?: string;
  release_date?: string;
  first_air_date?: string;
  vote_count?: number;
  vote_average?: number;
};


export type Props = {
  params: { id: string };
};

export type Movie = {
  id: string | number;
  title?: string;
  name?: string;
  overview?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  vote_average?: number;
  vote_count?: number;
  release_date?: string;
  first_air_date?: string;
  genre_ids?: number[];
};

export type Video = {
  key: string;
  site: string;
  type: string;
};

export type CastMember = {
  id: number;
  name: string;
  character: string;
  profile_path: string;
};

export type Review = {
  id: string;
  author: string;
  content: string;
};

export type SimilarMovie = {
  id: number;
  title: string;
  poster_path: string;
};