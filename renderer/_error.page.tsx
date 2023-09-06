import React from 'react';
import { usePageContext } from './usePageContext';

export type ErrorBlock = {
  errorTitle: string
  errorDescription: string;
}

const Page = () => {
  const pageContext = usePageContext();
  const { abortReason, abortStatusCode } = pageContext;
  const { errorTitle, errorDescription } = abortReason as ErrorBlock;

  return (
    <>
      <h1>{errorTitle}</h1>
      <p>{errorDescription}</p>
    </>
  );
};

export { Page };
