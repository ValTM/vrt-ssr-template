import React from 'react';
import { usePageContext } from './usePageContext';

export { Page };
export type ErrorBlock = {
  errorTitle: string
  errorDescription: string;
}

function Page() {
  const pageContext = usePageContext();
  const { abortReason, abortStatusCode } = pageContext;
  const { errorTitle, errorDescription } = abortReason as ErrorBlock;

  return (
    <>
      <h1>{errorTitle}</h1>
      <p>{errorDescription}</p>
    </>
  );
}
