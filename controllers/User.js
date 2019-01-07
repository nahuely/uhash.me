const Campaign = require("../models/campaigns");

module.exports = {
  detail(req, res, next) {
    const campaignId = req.params.campaignId;
    const userId = req.user._id;

    Campaign.findOne({ _id: campaignId, userId: userId })
      .then(campaign => {
        res.send(campaign);
      })
      .catch(next);
  },
  update(req, res, next) {
    const campaignId = req.params.campaignId;
    const userId = req.user._id;
    const updateObj = req.body;

    Campaign.findOneAndUpdate({ _id: campaignId, userId: userId }, updateObj)
      .then(campaign => {
        res.send(campaign);
      })
      .catch(next);
  },
};
