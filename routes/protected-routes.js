const express = require("express");
const Campaign = require("../controllers/Campaign");
const CampaignURL = require("../controllers/CampaignURL");

const router = express.Router();

router.get("/profile", (req, res, next) => {
  res.send({
    message: "You made it to the secure route",
    user: req.user,
    token: req.headers.authorization.split(" ")[1]
  });
});

router.put("/profile", (req, res, next) => {
  res.send({
    message: "You made it to the secure route",
    user: req.user,
    token: req.headers.authorization.split(" ")[1]
  });
});

router.get("/campaign", Campaign.list);
router.get("/campaign/:campaignId", Campaign.detail);
router.post("/campaign", Campaign.create);
router.put("/campaign/:campaignId", Campaign.update);
router.delete("/campaign/:campaignId", Campaign.delete);

router.get("/campaign/:campaignId/urls", CampaignURL.list);
router.post("/campaign/:campaignId/urls", CampaignURL.create);
router.delete("/campaign/:campaignId/urls/:urlsId", CampaignURL.delete);

module.exports = router;
