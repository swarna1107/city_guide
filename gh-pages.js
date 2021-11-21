var ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/swarna1107/city_guide.git", // Update to point to your repository
    user: {
      name: "Sawrna Jha", // update to use your name
      email: "swarnajha@davbistupur.org", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
