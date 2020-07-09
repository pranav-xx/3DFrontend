import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@/3dtours",
  app: () => System.import("http://localhost:9000/3dtours/-3dtours.js"),
  // System.import(
  //   "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
  // ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@/navbar",
//   app: () => System.import("@/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
