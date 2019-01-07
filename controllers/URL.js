const URL = require("../models/urls");
const shortid = require("shortid");

module.exports = {
  create(req, res, next) {
    const urlCode = shortid.generate();
    const urlProps = {
      originalURL: req.body.originalURL || undefined,
      hash: urlCode
    };

    URL.create(urlProps)
      .then(url => {
        res.send(url);
      })
      .catch(next);
  },
  index(req, res, next) {
    const id = req.params.urlId;
    const { ip, headers } = req;
    const { referer, "user-agent": userAgent } = headers;

    URL.findOneAndUpdate(
      { hash: id },
      {
        $push: {
          views: {
            browser: userAgent,
            ip,
            referer
          }
        }
      }
    )
      .then(url => {
        res.redirect(301, url.originalURL);
      })
      .catch(next);
  }
};
