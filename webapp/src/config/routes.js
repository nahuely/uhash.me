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
    profile:{
      path: '/profile',
      component: () => <div>/profile</div>,
    },
    campaign: {
      path: '/campaign',
      created: {
        id: {
          path: '/:campaignId',
          component: () => <div> /campaign/campaignId </div>,
        },
        list: {
          path: '/list',
          component: () => <div> /campaign/list </div>,
        },
      },
      new: {
        path: '/new',
        component: () => <div>/campaign/new</div>,
      },
    },
    links: {
      path: '/links',
      created: {
        id: {
          path: '/:linkId',
          component: () => <div> /links/linkId </div>,
        },
        list: {
          path: '/list',
          component: () => <div> /links/list </div>,
        },
      },
      new: {
        path: '/new',
        component: () => <div>/links/new</div>,
      },
    },
    groups: {
      path: '/groups',
      created: {
        id: {
          path: '/:groupId',
          component: () => <div> /groups/groupId </div>,
        },
        list: {
          path: '/list',
          component: () => <div> /groups/list </div>,
        },
      },
      new: {
        path: '/new',
        component: () => <div>/groups/new</div>,
      },
    },
  }
};
