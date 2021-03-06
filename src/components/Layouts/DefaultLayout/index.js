import Header from "../LayoutOnly/Header";
import Footer from "../LayoutOnly/Footer";
import Content from "./Content";

function DefaultLayout({children}) {
    return (
        <>
            <Header/>
            <Content/>
            <Footer/>
        </>
    )
};

export default DefaultLayout;