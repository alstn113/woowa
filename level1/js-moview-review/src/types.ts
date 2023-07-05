// {
//   "page": 3,
//   "results": [
//     {
//       "adult": false,
//       "backdrop_path": "/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
//       "genre_ids": [28, 12, 878],
//       "id": 505642,
//       "original_language": "en",
//       "original_title": "Black Panther: Wakanda Forever",
//       "overview": "국왕이자 블랙 팬서인 티찰라의 죽음 이후 수많은 강대국으로부터 위협을 받게 된 와칸다. 라몬다, 슈리 그리고 나키아, 오코예, 음바쿠는 각자 사명감을 갖고 와칸다를 지키기 위해 외로운 싸움을 이어간다. 한편, 비브라늄의 패권을 둘러싼 미스터리한 음모와 함께 깊은 해저에서 모습을 드러낸 최강의 적 네이머와 탈로칸의 전사들은 와칸다를 향해 무차별 공격을 퍼붓기 시작하는데…",
//       "popularity": 310.783,
//       "poster_path": "/nPpS4H39AhDD8g5VPt6tQcFJNtL.jpg",
//       "release_date": "2022-11-09",
//       "title": "블랙 팬서: 와칸다 포에버",
//       "video": false,
//       "vote_average": 7.2,
//       "vote_count": 5090
//     }
//   ],
//   "total_pages": 38992,
//   "total_results": 779835
// }

export interface Response {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
