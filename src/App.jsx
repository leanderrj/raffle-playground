/**
 * IMPORTANT
 * If drag/dropping to a repo, avoid overwriting App.jsx
 */

import {
  ActionList,
  AppProvider as PolarisProvider,
  Frame,
  Navigation,
  TopBar,
} from "@shopify/polaris";
import {
  AnalyticsMinor,
  AppsMinor,
  CirclePlusMinor,
  CustomersMinor,
  DiscountsMinor,
  HomeMinor,
  MarketingMinor,
  OrdersMinor,
  ProductsMinor,
  StoreMinor,
} from "@shopify/polaris-icons";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import { useRoutes } from "raviger";
import React, { useCallback, useState } from "react";
import routes from "./GlobalRoutes";

const App = () => {
  const RouteDOM = useRoutes(routes);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false);
    setSearchValue("");
  }, []);

  const handleSearchChange = useCallback((value) => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
  }, []);

  const handleNavigationToggle = useCallback(() => {
    console.log("toggle navigation visibility");
  }, []);

  const logo = {
    width: 35,
    topBarSource: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg",
    accessibilityLabel: "Test Store",
  };

  const userMenuMarkup = (
    <TopBar.UserMenu name="Kinngh" detail="Polaris Test" initials="K" />
  );

  const searchResultsMarkup = <ActionList />;

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchValue}
      placeholder="Search"
      showFocusBorder
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={isSearchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={handleNavigationToggle}
    />
  );

  const AppNavigation = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: "Home",
            icon: HomeMinor,
          },
          {
            label: "Orders",
            icon: OrdersMinor,
            badge: "10",
          },
          {
            label: "Products",
            icon: ProductsMinor,
          },
          {
            label: "Customers",
            icon: CustomersMinor,
          },
          {
            label: "Analytics",
            icon: AnalyticsMinor,
          },
          {
            label: "Marketing",
            icon: MarketingMinor,
          },
          {
            label: "Discounts",
            icon: DiscountsMinor,
          },
          {
            url: "/",
            label: "Apps",
            icon: AppsMinor,
          },
        ]}
      />
      <Navigation.Section
        separator
        title="Sales channels"
        items={[
          {
            label: "Online Store",
            icon: StoreMinor,
          },
        ]}
        action={{
          icon: CirclePlusMinor,
          accessibilityLabel: "Add",
          onClick: () => {},
        }}
      />
    </Navigation>
  );

  return (
    <PolarisProvider i18n={translations}>
      <Frame navigation={AppNavigation} topBar={topBarMarkup} logo={logo}>
        {RouteDOM}
      </Frame>
    </PolarisProvider>
  );
};
export default App;
