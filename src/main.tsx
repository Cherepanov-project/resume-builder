import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store, { persistor } from "./store/store";
import App from "./App.tsx";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import Auth0ProviderWithRedirectCallback from "./components/atoms/Auth0ProviderWithRedirectCallback/Auth0ProviderWithRedirectCallback.tsx";
import { ThemeProvider } from "@mui/material";
import { theme } from './assets/style/theme.ts';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithRedirectCallback
        authorizationParams={{
          redirect_uri: `${window.location.origin}/intro`,
        }}
      >
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
  </React.StrictMode>,
);
