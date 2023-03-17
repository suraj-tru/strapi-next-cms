import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';       // Importing Provider
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import store from "../redux/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {" "}
            <Provider store={store}>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
                <ToastContainer />
            </Provider>
        </>
    );
}
