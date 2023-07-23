import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

async function prepare() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser.ts')
    return worker.start({
      onUnhandledRequest: (req, print) => {
        if (!req.url.href.includes('/api')) {
          return
        }

        print.error()
      },
    })
  }
}

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
})
