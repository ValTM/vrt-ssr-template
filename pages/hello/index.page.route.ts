import { resolveRoute } from 'vite-plugin-ssr/routing';
import { render } from 'vite-plugin-ssr/abort';
import { ErrorBlock } from '../../renderer/_error.page';

// Route Functions enables advanced routing logic
export default (pageContext: { urlPathname: string }) => {
  if (pageContext.urlPathname === '/hello' || pageContext.urlPathname === '/hello/') {
    const name = 'anonymous';
    return { routeParams: { name } };
  }
  return resolveRoute('/hello/@name', pageContext.urlPathname);
}

// The guard() hook enables to protect pages
export const guard = async (pageContext: { urlPathname: string }) => {
  if (pageContext.urlPathname === '/hello/forbidden') {
    await sleep(2 * 1000); // Unlike Route Functions, guard() can be async
    const error: ErrorBlock = { errorDescription: 'This page is forbidden.', errorTitle: 'Forbidden.' };
    throw render(403, error);
  }
};

const sleep = (milliseconds: number): Promise<void> => {
  return new Promise((r) => setTimeout(r, milliseconds));
};
