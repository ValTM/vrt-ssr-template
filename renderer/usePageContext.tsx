import React, { useContext } from 'react';
import type { PageContext } from './types';

const Context = React.createContext<PageContext>(undefined as any);

const PageContextProvider = ({ pageContext, children }: { pageContext: PageContext; children: React.ReactNode }) => {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

const usePageContext = () => {
  return useContext(Context);
};

export { PageContextProvider };
export { usePageContext };
