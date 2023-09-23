export type PostInfo = {
  brd_no: number;
  cmt_cnt?: string;
  ctxt: string;
  ctxtType?: string;
  img_cnt?: number;
  img_url?: string;
  mod_date: string;
  nickname?: string;
  read_cnt: number;
  reg_date: string;
  rnum: number;
  ttl: string;
  user_like: number;

  styledType?: number;
  id: string;
  snsType: string | null;
};

// export type PostListResponse = {
//   responseValue: PostInfo[];
//   pageCount: number;
//   perPage: number;
//   page: number;
//   totalCount: number;
// };

export type PostListResponse = {
  responseValue: PostInfo[];
  message: string;
  statusCod: number;
};

export type PostDetailedInfo = {
  userInfo: string;
  read_cnt: number;
  user_like: number;
  reg_date: string;
  body: string;
};

export type CommentInfo = {
  nickname: string;
  cmt_ctxt: string;
  use_yn: string;
  cmt_no: number;
  prt_cmt_no: number;
  brd_no: number;
  regDate: string;
  modDate: string;
};

export type CommentListResponse = {
  statusCode: number;
  message: string;
  responseValue: CommentInfo[];
};
