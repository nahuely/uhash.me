import React from "react";
import views from "../views";

export default {
  public: {
    home: {
      exact: true,
      path: "/",
      component: views.Shortener
    },
    login: {
      path: "/login",
      component: views.Login
    },
    signUp: {
      path: "/sign-up",
      component: views.SignUp
    },
    aboutUs: {
      path: "/about-us",
      component: views.AboutUs
    }
  },
  private: {
    profile: {
      path: "/profile",
      component: views.Profile
    },
    links: {
      path: "/links",
      routes: {
        list: {
          path: "",
          component: views.Links.dashboard,
          exact: true
        }
      }
    },
    campaign: {
      path: "/campaign",
      routes: {
        list: {
          path: "",
          component: views.Campaign.list,
          exact: true
        },
        new: {
          path: "/new",
          component: views.Campaign.create
        },
        detail: {
          path: "/:campaignId",
          component: views.Campaign.detail
        }
      }
    },
    groups: {
      path: "/groups",
      routes: {
        detail: {
          path: "/:groupId",
          component: () => <div> /groups/groupId </div>
        },
        list: {
          exact: true,
          path: "",
          component: () => <div> /groups/list </div>
        },
        new: {
          path: "/new",
          component: () => <div>/groups/new</div>
        }
      }
    },
    stats: {
      path: "/stats",
      routes: {
        list: {
          path: "",
          component: views.Stats,
          exact: true
        }
      }
    }
  }
};
