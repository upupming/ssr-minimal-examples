import ReactDOMServer from 'react-dom/server'
import App from './App.tsx'

export async function render(url, manifest) {
  console.log('rendering', url, manifest)

  const html = await ReactDOMServer.renderToString(
    <App />
  )

  const preloadLinks: string[] = []
  return [html, preloadLinks]
}
