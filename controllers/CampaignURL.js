const Campaign = require("../models/campaigns");

module.exports = {
  list(req, res, next) {
    Campaign.find({ userId: req.user._id })
      .then(campaigns => {
        res.send(campaigns);
      })
      .catch(next);
  },
  create(req, res, next) {
    const campaignProps = req.body;
    campaignProps.userId = req.user._id;

    Campaign.create(campaignProps)
      .then(campaign => {
        res.send(campaign);
      })
      .catch(next);
  },
  delete(req, res, next) {

  }
};
