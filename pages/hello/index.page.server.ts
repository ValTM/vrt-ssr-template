import type { PageContextBuiltInServer } from 'vite-plugin-ssr/types';
import { render } from 'vite-plugin-ssr/abort';
import { ErrorDetails } from '../../renderer/_error.page';

const names = ['evan', 'rom', 'alice', 'jon', 'eli'];

const onBeforeRender = async (pageContext: PageContextBuiltInServer) => {
  const { name } = pageContext.routeParams;
  if (name !== 'anonymous' && !names.includes(name)) {
    const error: ErrorDetails = { errorDescription: `Unknown name: ${name}`, errorTitle: 'Unknown' };
    throw render(404, error);// RenderErrorPage({ pageContext: { pageProps: { errorDescription } } })
  }
  const pageProps = { name };
  return {
    pageContext: {
      pageProps
    }
  };
};

const prerender = (): string[] => {
  return ['/hello', ...names.map((name) => `/hello/${name}`)];
};

export { onBeforeRender, prerender };
