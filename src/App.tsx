import * as React from "react";
import producycle from "./assets/producycle.svg";
import dashboard from "./assets/dashboard.png";
import discover from "./assets/discover.png";
import order from "./assets/order.png";
import practice from "./assets/practice.png";
import sharecost from "./assets/share-cost.png";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureSection = (feature: Feature, index: number) => {
  const isEven = index % 2 === 0;

  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Icon Section */}
      <div
        className={`w-full md:w-1/3 flex justify-center ${!isEven && "md:order-2"}`}
      >
        <div className="w-250 rounded-full flex items-center justify-center">
          {feature.icon}
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`w-full md:w-2/3 text-center md:text-left ${!isEven && "md:order-1"}`}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {feature.title}
        </h3>
        <p className="text-lg dark-green">{feature.description}</p>
      </div>
    </div>
  );
};

// Updated features array with more detailed content
const features: Feature[] = [
  {
    title: "Streamlined Ordering",
    description:
      "Reduce paper usage with digitized internal ordering process and the simplification of creating purchasing orders and reconciling invoices",
    icon: <img src={order} className="w-200 h-200" />,
  },
  {
    title: "Automated Data Capture",
    description:
      "See all purchasing data in the same place, with the option to customize metrics (ie. $ of local purchases, % from BIPOC farmers, % of organic, etc.) of your institution",
    icon: <img src={dashboard} className="w-200 h-200" />,
  },
  {
    title: "Connect with institution-ready local growers",
    description:
      "Tap into the network of growers that already  understand the processes working with institutional buyers, eliminating the time-consuming process of finding new suppliers",
    icon: <img src={discover} className="w-200 h-200" />,
  },
  {
    title: "Learn from and share best practices",
    description:
      "Access the contact and project plans of peer insights and proven strategies that have worked from other school districts, hospital, or other institution",
    icon: <img src={practice} className="w-200 h-200" />,
  },
  {
    title: "Collaborative Cost Sharing",
    description:
      "Work with others in the area through Producycle and utilize shared purchasing and split deliveries, reduced  logistics costs, and support local suppliers who can serve multiple institutions",
    icon: <img src={sharecost} className="w-200 h-200" />,
  },
];

// Features section component
const FeaturesSection = () => {
  return (
    <div id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 md:space-y-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={index !== 0 ? "border-t border-gray-200 pt-8" : ""}
            >
              {FeatureSection(feature, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {

  const requestDemo = React.useCallback(() => {
    window.location.href = 'mailto:cynthia@producycle.com';
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="flex sticky top-0 w-full justify-start bg-white shadow-sm z-50">
        <div className="max-w-7xl my-3 px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 h-16 items-center">
            <div className="flex-shrink-0 flex space-x-4 items-center">
              <img
                src={producycle}
                className="img w-40"
                alt="Producycle logo"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-24 pb-8 md:pt-32 bg-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Local Food Procurement</span>
              <span className="block dark-green">Made Simple</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base dark-green sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              A world where institutions serve 
              healthier food, strengthen local
              food systems with transparency on
              true costs
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <button
                  type="button"
                  onClick={() => requestDemo()}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      {FeaturesSection()}
    </>
  );
}

export default App;

