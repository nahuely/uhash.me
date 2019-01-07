const app = require("./app");
const connect = require("./helpers/connect");
const { mongodbURL, expressPort } = require("./constants/constants");

connect(mongodbURL)
  .then(() =>
    app.listen(expressPort, () => {
      console.info(`app listen in port: ${expressPort}`);
    })
  )
  .catch(e => console.error(e));
