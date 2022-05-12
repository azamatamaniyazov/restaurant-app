import AppBanner from "./appBanner/AppBanner";
import CustomersBlock from "./customersBlock/CustomersBlock";
import EventsBlock from "./eventsBlock/EventsBlock";
import RecommendBlock from "./recommendBlock/RecommendBlock";

function HomePage() {
  return (
    <>
      <AppBanner />
      <RecommendBlock />
      <CustomersBlock />
      <EventsBlock />
    </>
  );
}

export default HomePage;
