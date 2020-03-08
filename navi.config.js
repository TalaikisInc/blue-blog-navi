import path from 'path'

export const renderPageToString = require.resolve('./src/renderPageToString')

export function getPagePathname({ url }) {
  if (url.pathname === '/rss') {
    return 'rss.xml'
  }
  if (url.pathname === '/') {
    return 'index.html'
  }
  return path.join(url.pathname.slice(1), 'index.html')
}
