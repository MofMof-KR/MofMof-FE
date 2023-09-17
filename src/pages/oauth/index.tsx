import {HttpClient} from '@/httpClient/httpClient';
import {AuthenticationServiceImpl} from '@/services/AuthenticationService';
import {LocalStorage} from '@/storage/LocalStorage';
import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
interface OAuthServerSideProps {
  statusCode: number;
  responseValue: string | any;
}
const OAuth = ({statusCode, responseValue}: OAuthServerSideProps) => {
  const router = useRouter();
  useEffect(() => {
    if (statusCode === 200) {
      const localStorage = new LocalStorage();
      localStorage.save(responseValue);
      router.push('/');
    }
  }, []);
  return <>hi</>;
};

//TODO:: change to next-redux-wrapper
export const getServerSideProps = async ({query}: any) => {
  const category = query.code;
  const httpClient = new HttpClient(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVER_BASE_URL}`,
  );
  const localStorage = new LocalStorage();
  const authorizationService = new AuthenticationServiceImpl(
    httpClient,
    localStorage,
  );
  const response = await authorizationService.login(category);
  const signInResponse = {
    statusCode: response.status,
    responseValue: response.data?.responseValue,
  };
  return {props: signInResponse};
};

export default OAuth;
