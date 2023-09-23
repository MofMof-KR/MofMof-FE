export type UserResponse = {
  id: string;
  email: string;
  name: string;
  nickname: string;
  gender: string;
  birthday: string;
  birthyear: string;
  phone: string;
  likeGaeko: string;
  profileImgUrl: string;
};

export type SignUpRequest = {
  id: string;
  age: string;
  gender: string;
  name: string;
  birthday: string;
  birthyear: string;
  email: string;
  mobile: string;
  nickname: string;
  likeGaeko: string;
};

export type SignUpResponse = {
  statusCode: number;
  message: string;
  reponseValue: string;
};
