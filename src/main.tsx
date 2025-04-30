import 'index.css'
import { createRoot } from 'react-dom/client'
import {persistor, store} from 'store.ts'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import App from 'App.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <App />
    </PersistGate>
  </Provider>
)