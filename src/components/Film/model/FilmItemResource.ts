/**
 * Object returned by Ghibli API
 */
export default class FilmItemResource {
  id!: string;
  title!: string;
  original_title!: string;
  original_title_romanised!: string;
  description!: string;
  director!: string;
  producer!: string;
  release_date!: number;
  running_time!: number;
  rt_score!: number;
  people!: [];
  species!: [];
  locations!: [];
  vehicles!: [];
  url!: string;

  /**
   * Number of likes of movie
   */
  nbLike: number = 0;
}
