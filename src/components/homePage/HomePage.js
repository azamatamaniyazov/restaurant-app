import AppHeader from "../homePage/appHeader/AppHeader";
import CustomersBlock from "./customersBlock/CustomersBlock";
import EventsBlock from "./eventsBlock/EventsBlock";
import RecommendBlock from "./recommendBlock/RecommendBlock";

function HomePage() {
  return (
    <>
      <AppHeader />
      <RecommendBlock />
      <CustomersBlock />
      <EventsBlock />
    </>
  );
}

export default HomePage;
