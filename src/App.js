import "./App.scss";
import imageOne from "./assets/images/photo-1.jpg";
import imageTwo from "./assets/images/photo-2.jpg";
import imageThree from "./assets/images/photo-3.jpg";
import imageFour from "./assets/images/photo-4.jpg";
import imageFive from "./assets/images/photo-5.jpg";
import imageSix from "./assets/images/poster-meet-the-makers.jpg";
import { Content, Hero, Navbar } from "./components/index";
import { Images, MediaWithText } from "./containers/index";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero pageHeading={"Ableton"} />

      <Content
        contentHeading="We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things."
        contentBody="Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world."
      />

      <Images
        sectionClass="box-yellow"
        imageOne={imageOne}
        classNameOne="images__lg"
        imageTwo=""
        imageThree={imageTwo}
        classNameThree="images__sm"
      />

      <Content
        contentHeading="Making music isn't easy. It takes time, effort, and learning. But when you're in the flow, it's incredibly rewarding."
        contentBody="We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for."
      />

      <Content
        contentHeading="We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo."
        contentBody="Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture."
      />

      <Images
        sectionClass="box-green"
        imageOne={imageThree}
        classNameOne="images__sm"
        imageTwo={imageFour}
        classNameTwo="images__sm"
        imageThree={imageFive}
        classNameThree="images__lg"
      />

      <Content
        contentHeading="We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great."
        contentBody="Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We've learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don't always agree with each other, but opinion and debate are valued and openly encouraged."
      />

      <Images
        imageOne={imageSix}
        classNameOne="images__full"
        imageTwo=""
        imageThree=""
      />

      <Content
        contentHeading="We want our employees to love it here. Since we're looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible."
        contentBody="If you're joining us in Berlin, we'll help with relocation and paperwork. We'll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it's not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities."
      />

      <MediaWithText />
    </div>
  );
};

export default App;
