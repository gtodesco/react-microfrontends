import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@gt/react-single",
  app: () => System.import("@gt/react-single"),
  activeWhen: (location) => location.pathname === '/react-single',
});

registerApplication({
  name: "@gt/react-multiples",
  app: () => System.import("@gt/react-multiples"),
  activeWhen: ['/react-multiples'],
});

// registerApplication({
//   name: "@gt/react-parcel",
//   app: () => System.import("@gt/react-parcel"),
//   activeWhen: (location) => location.pathname === '/react-parcel',
// });

registerApplication({
  name: "@gt/react-route",
  app: () => System.import("@gt/react-route"),
  activeWhen: (location) => location.pathname === '/react-route',
});

registerApplication({
  name: "@gt/react-lazy",
  app: () => System.import("@gt/react-lazy"),
  activeWhen: ['/react-lazy'],
});

registerApplication({
  name: "@gt/react-header",
  app: () => System.import("@gt/react-header"),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
