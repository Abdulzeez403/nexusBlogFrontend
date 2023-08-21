import { BlogContextProvider } from "@/module/context";
import { UserContextProvder } from "@/module/UserContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Notification from "../components/toast/notify";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvder>
    <BlogContextProvider>
        <Component {...pageProps} />
        <Notification />
    </BlogContextProvider>
    </UserContextProvder>

  );
}
