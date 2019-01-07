const Campaign = require("../models/campaigns");

module.exports = {
  list(req, res, next) {
    Campaign.find({ userId: req.user._id })
      .then(campaigns => {
        res.send(campaigns);
      })
      .catch(next);
  },
  detail(req, res, next) {
    const campaignId = req.params.campaignId;
    const userId = req.user._id;

    Campaign.findOne({ _id: campaignId, userId: userId })
      .then(campaign => {
        res.send(campaign);
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
  delete(req, res, next) {
    res.send({
      action: "delete"
    });
  }
};
