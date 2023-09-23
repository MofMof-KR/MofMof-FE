export type InsertCommentInfo = {
  styledType?: number;
  nickname?: string;
  id: string;
  ctxt: string;
  ttl: string;
  rnum: number;
  img_url?: string;
  snsType: string | null;
  ctxtType?: string;
  brdNo: number;
};

export type CommentInsertResponse = {
  responseValue: PostInfo[];
  pageCount: number;
  perPage: number;
  page: number;
  totalCount: number;
};
