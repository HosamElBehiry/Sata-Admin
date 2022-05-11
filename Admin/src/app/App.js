import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthInit } from "./modules/Auth";
import { Routes } from "../app/Routes";
import { I18nProvider } from "../_metronic/i18n";
import { MaterialThemeProvider } from "../_metronic/layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-rater/lib/react-rater.css";
export default function App({ store, persistor, basename }) {
  const queryClient = new QueryClient();
  toast.configure();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter basename={basename}>
            <MaterialThemeProvider>
              <I18nProvider>
                <AuthInit>
                  <Routes />
                </AuthInit>
              </I18nProvider>
            </MaterialThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
    </QueryClientProvider>
  );
}
