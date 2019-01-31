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
      component: () => <div>/profile</div>
    },
    links: {
      path: "/links",
      routes: {
        list: {
          path: "",
          component: () => <div> /links/list </div>
        },
        detail: {
          path: "/:linkId",
          component: () => <div> /links/linkId </div>
        },
        new: {
          path: "/new",
          component: () => <div>/links/new</div>
        }
      }
    },
    campaign: {
      path: "/campaign",
      routes: {
        list: {
          path: "",
          component: () => <div>campaign/list</div>
        },
        new: {
          path: "/new",
          component: () => <div>campaign/new</div>
        },
        detail: {
          path: "/:campaignId",
          component: () => <div>campaign/:campaignId</div>
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
          component: () => <div>stats</div>
        }
      }
    }
  }
};
