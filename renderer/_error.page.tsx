import React from 'react';
import { usePageContext } from './usePageContext';

export type ErrorDetails = {
  errorTitle: string
  errorDescription: string;
}

const DefaultError: ErrorDetails = { errorTitle: 'Error', errorDescription: 'Someething went wrong' };

const Page = () => {
  const pageContext = usePageContext();
  const { abortReason, abortStatusCode } = pageContext;
  let error: ErrorDetails = { errorTitle: '', errorDescription: '' };
  if (!abortReason) {
    if (typeof abortStatusCode === 'number')
      // 401 | 403 | 404 | 410 | 429 | 500 | 503
      switch (abortStatusCode) {
        case 401:
          error.errorTitle = 'Unauthorized.';
          error.errorDescription = `You're not authenticated`;
          break;
        case 403:
          error.errorTitle = 'Forbidden.';
          error.errorDescription = `You're not authorized to view this resource`;
          break;
        case 404:
          error.errorTitle = 'Not found.';
          error.errorDescription = 'Resource not found';
          break;
        case 410:
          error.errorTitle = 'Gone.';
          error.errorDescription = 'Resource is no longer present';
          break;
        case 429:
          error.errorTitle = 'Too many requests.';
          error.errorDescription = 'Too many requests';
          break;
        case 500:
        case 503:
          error = DefaultError;
          break;
      }
  } else {
    if ((abortReason as ErrorDetails).errorTitle && (abortReason as ErrorDetails).errorDescription) {
      error.errorTitle = (abortReason as ErrorDetails).errorTitle;
      error.errorDescription = (abortReason as ErrorDetails).errorDescription;
    } else {
      error = DefaultError;
      console.error('invalid error type');
    }
  }

  return (
    <>
      <h1>{error.errorTitle}</h1>
      <p>{error.errorDescription}</p>
    </>
  );
};

export { Page };
