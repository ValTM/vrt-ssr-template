export type { PageContextServer };
export type { PageContextClient };
export type { PageContext };
export type { PageProps };

import type { PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient, PageContextBuiltInServer } from 'vite-plugin-ssr/types';

type Page = (pageProps: PageProps) => React.ReactElement
type PageProps = Record<string, unknown>

export type PageContextCustom = {
  Page: Page
  pageProps?: PageProps
  exports: {
    documentProps?: {
      title: string
    }
  }
  documentProps?: {
    title: string
  }
}

type PageContextServer = PageContextBuiltInServer<Page> & PageContextCustom
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom

type PageContext = PageContextClient | PageContextServer
