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
    user: {
      path: "/user",
      routes: {
        profile: {
          path: "/profile",
          routes: {
            create: {
              path: "/update",
              component: () => <div>/user/profile/update</div>
            },
            detail: {
              path: "/detail",
              component: () => <div>/user/profile/detail</div>
            }
          }
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
        create: {
          path: "/create",
          component: () => <div>campaign/create</div>
        },
        update: {
          path: "/:campaignId",
          component: () => <div>campaign/:campaignId</div>
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
