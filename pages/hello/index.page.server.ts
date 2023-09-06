import type { PageContextBuiltInServer } from 'vite-plugin-ssr/types';
import { render } from 'vite-plugin-ssr/abort';
import { ErrorBlock } from '../../renderer/_error.page';

export { onBeforeRender };
export { prerender };

const names = ['evan', 'rom', 'alice', 'jon', 'eli'];

async function onBeforeRender(pageContext: PageContextBuiltInServer) {
  const { name } = pageContext.routeParams;
  if (name !== 'anonymous' && !names.includes(name)) {
    const error: ErrorBlock = { errorDescription: `Unknown name: ${name}`, errorTitle: 'Unknown' };
    throw render(404, error);// RenderErrorPage({ pageContext: { pageProps: { errorDescription } } })
  }
  const pageProps = { name };
  return {
    pageContext: {
      pageProps
    }
  };
}

function prerender(): string[] {
  return ['/hello', ...names.map((name) => `/hello/${name}`)];
}
