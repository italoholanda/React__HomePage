import "./App.scss";
import { Banner } from "./Components/Banner";
import { ContactUs } from "./Components/ContactUs";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Members } from "./Components/Members";
import { Services } from "./Components/Services";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <Services />
      <Members />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
