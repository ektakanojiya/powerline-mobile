angular.module('app')
.config(function ($stateProvider, $urlRouterProvider/*, $routeProvider*/) {
  $stateProvider
    .state('app', {
      url: '',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
          });

  var states = [{
      name: 'preload',
      url: '/preload',
      templateUrl: 'templates/home/preload.html',
      controller: 'preload'
    }, {
      name: 'main',
      url: '/main',
      cache: true,
      templateUrl: 'templates/home/home.html',
      controller: 'home'
    }, {
      name: 'newActivities',
      url: '/new-activities',
      cache: true,
      templateUrl: 'templates/home/home.html',
      controller: 'home'
    }, {
      name: 'login',
      url: '/login',
      templateUrl: 'templates/session/login.html',
      controller: 'session.login'
    }, {
      name: 'logout',
      url: '/logout',
      templateUrl: 'templates/session/logout.html',
      controller: 'session.logout'
    }, {
      name: 'friendFinderController',
      url: '/friend-finder',
      templateUrl: 'templates/friend-finder/index.html',
      controller: 'friendFinderController',
      cache: true
    }, {
      name: 'commingSoon',
      url: '/comming-soon',
      cache: true,
      templateUrl: 'templates/coming-soon.html'
    }, {
      name: 'poling',
      url: '/poling',
      cache: true,
      templateUrl: 'templates/coming-soon.html'
    }, {
      name: 'terms',
      url: '/terms',
      cache: true,
      templateUrl: 'templates/terms.html',
      controller: 'session.terms'
    }, {
      name: 'registration',
      url: '/registration',
      templateUrl: 'templates/session/registration.html',
      controller: 'session.registration'
    }, {
      name: 'registrationStep2',
      url: '/registration-step2',
      templateUrl: 'templates/session/registration-step2.html',
      controller: 'session.registration-step2'
    }, {
      name: 'registrationStep3',
      url: '/registration-step3',
      templateUrl: 'templates/session/registration-step3.html',
      controller: 'session.registration-step3'
    }, {
      name: 'forgotPassword',
      url: '/forgot-password',
      templateUrl: 'templates/session/forgot-password.html',
      controller: 'session.forgot-password'
    }, {
      name: 'guide',
      url: '/guide',
      templateUrl: 'templates/guide/index.html',
      controller: 'guide'
    }, {
      name: 'guideConfirm',
      url: '/guide-confirm',
      templateUrl: 'templates/guide/confirm.html',
      controller: 'guide.confirm'
    }, {
      name: 'search',
      url: '/search',
      cache: true,
      templateUrl: 'templates/search/index.html',
      controller: 'search'
    }, {
      name: 'paymentPolls-paymentRequest',
      url: '/payment-polls/payment-request/:id',
      templateUrl: 'templates/payment-polls/payment-request.html',
      controller: 'question.payment-request'
    }, {
      name: 'paymentPolls-crowdfundingPaymentRequest',
      url: '/payment-polls/crowdfunding-payment-request/:id',
      templateUrl: 'templates/payment-polls/crowdfunding-payment-request.html',
      controller: 'question.payment-request'
    },{
      name: 'getPetition',
      url: '/petition/:id',
      templateUrl: 'templates/petitions/petition.html',
      controller: 'getPetitionCtrl'
    }, {
      name: 'getUserPetition',
      url: '/user-petition/:id',
      templateUrl: 'templates/user-petitions/user-petition.html',
      controller: 'getUserPetitionCtrl'
    },{
      name: 'createUserPetition',
      url: '/user-petition/create/:groupID',
      templateUrl: 'templates/user-petitions/create.html',
      controller: 'createUserPetitionCtrl'
    }, {
      name: 'getPost',
      url: '/post/:id',
      templateUrl: 'templates/posts/post.html',
      controller: 'getPostCtrl'
    },{
      name: 'createPost',
      url: '/post/create/:groupID',
      templateUrl: 'templates/posts/create.html',
      controller: 'createPostCtrl'
    }, {
      name: 'discussion',
      url: '/discussion/:entity/:id',
      templateUrl: 'templates/question/discussion.html',
      controller: 'discussion'
    }, {
      name: 'discussionComent',
      url: '/discussion/:entity/:id/:comment',
      templateUrl: 'templates/question/discussion.html',
      controller: 'discussion'
    }, {
      name: 'question',
      url: '/questions/:id',
      templateUrl: 'templates/question/layout.html',
      controller: 'question'
    },{
      name: 'createPollQuestion',
      url: '/poll-question/create/:groupID',
      templateUrl: 'templates/poll-questions/create.html',
      controller: 'createPollQuestionCtrl'
    }, {
      name: 'questionNews',
      url: '/question/news/:id',
      templateUrl: 'templates/question/news.html',
      controller: 'question.news'
    }, {
      name: 'questionLeaderPetition',
      url: '/question/leader-petition/:id',
      templateUrl: 'templates/question/petition.html',
      controller: 'question.leader-petition'
    }, {
      name: 'questionLeaderEvent',
      url: '/leader-event/:id',
      templateUrl: 'templates/leader-event/leader-event.html',
      controller: 'question.leader-event'
    }, {
      name: 'questionEducational',
      url: '/questions/educational/:id',
      templateUrl: 'templates/question/educational-context.html',
      controller: 'question.educational-context'
    }, {
      name: 'questionInfluences',
      url: '/question/influences/:id',
      templateUrl: 'templates/question/influences-full.html',
      controller: 'question.influences'
    }, {
      name: 'influences',
      url: '/influences',
      cache: true,
      templateUrl: 'templates/influence/influences.html',
      controller: 'influences'
    }, {
      name: 'influencesProfile',
      url: '/influence/profile/:id',
      templateUrl: 'templates/influence/profile.html',
      controller: 'influence.profile'
    }, {
    }, {
      name: 'influencesAdd',
      url: '/influences/add',
      cache: true,
      templateUrl: 'templates/influence/search.html',
      controller: 'influences.search'
    }, {
      cache: true,
      name: 'influencesNotification',
      url: '/influences/notifications',
      templateUrl: 'templates/influence/notifications.html',
      controller: 'influences.notifications'
    }, {
      name: 'representatives',
      url: '/representatives',
      cache: true,
      templateUrl: 'templates/representatives/list.html',
      controller: 'representatives'
    }, {
      name: 'representativeProfile',
      url: '/representative/:id/:storageId',
      templateUrl: 'templates/representatives/profile.html',
      controller: 'representatives.profile'
    }, {
      name: 'groups',
      url: '/groups',
      cache: true,
      templateUrl: 'templates/groups/my-groups.html',
      controller: 'groups'
    }, {
      name: 'groupsSearch',
      url: '/groups/search',
      templateUrl: 'templates/groups/search.html',
      controller: 'groups.search'
    }, {
      name: 'groupsCreate',
      url: '/groups/create/:fromWhere',
      templateUrl: 'templates/groups/create.html',
      controller: 'groups.create'
    }, {
      name: 'groupsProfile',
      url: '/group/:id',
      templateUrl: 'templates/groups/profile.html',
      controller: 'groups.profile'
    },{
      name: 'groupMembers',
      url: '/group-members/:id',
      templateUrl: 'templates/groups/group-members.html',
      controller: 'group.members'
    }, {
      name: 'groupsJoin',
      url: '/group/join/:id',
      templateUrl: 'templates/groups/join.html',
      controller: 'groups.join'
    },{
      name: 'manageGroup',
      url: '/manage-group/:id',
      templateUrl: 'templates/groups/manage-group.html',
      controller: 'manageGroupCtrl'
    }, {
      name: 'services',
      url: '/other-services',
      templateUrl: 'templates/services/index.html',
      controller: 'services'
    }, {
      name: 'profile',
      url: '/profile',
      templateUrl: 'templates/profile/profile.html',
      controller: 'profile'
    },{
      name: 'profileForFacebookNewscomers',
      url: '/profile-for-facebook-newscomers',
      templateUrl: 'templates/profile/profile-for-facebook-newscomers.html',
      controller: 'profileForFacebookNewscomersCtrl'
    }, {
      name: 'profile2',
      url: '/profile-2',
      templateUrl: 'templates/profile/profile-2.html',
      controller: 'profile-step2'
    }, {
      name: 'profile3',
      url: '/profile-3',
      templateUrl: 'templates/profile/profile-3.html',
      controller: 'profile-step3'
    }, {
      name: 'settings',
      url: '/settings',
      templateUrl: 'templates/profile/settings.html',
      controller: 'settings'
    }, {
      name: 'messages',
      url: '/messages',
      templateUrl: 'templates/messages/list.html',
      controller: 'messages'
    }, {
      name: 'microPetionsGroupAdd',
      url: '/micro-petitions/add/:type/:group_id',
      templateUrl: 'templates/petitions/add.html',
      controller: 'petitions.add'
    }, {
      name: 'groupPetions',
      url: '/group-petitions',
      templateUrl: 'templates/home/home.html',
      controller: 'home'
    }, {
      name: 'groupPetion',
      url: '/group-petions/:id',
      templateUrl: 'templates/petitions/group.html',
      controller: 'petitions.group'
    },
    {
      name: 'favorite',
      url: '/favorite',
      templateUrl: 'templates/favorite/home.html',
      controller: 'favorite'
    },{
      name: 'favorite-preload',
      url: '/favorite-preload',
      templateUrl: 'templates/favorite/preload.html',
      controller: 'preload'
    }, {
      name: 'favorite-main',
      url: '/favorite-main',
      cache: true,
      templateUrl: 'templates/favorite/home.html',
      controller: 'favorite'
    }, {
      name: 'followgroup',
      url: '/followgroup/:id',
      templateUrl: 'templates/followgroup/followgroup.html',
      controller: 'followgroup'
    }, {
      name: 'followgroupProfile',
      url: '/followgroup/profile/:id',
      templateUrl: 'templates/followgroup/profile.html',
      controller: 'followgroup.profile'
    },{
      name: 'createAnnouncement',
      url: '/announcement/create/:groupID',
      templateUrl: 'templates/announcements/create.html',
      controller: 'createAnnouncementCtrl'
    },{
      name: 'createPollFundraiser',
      url: '/poll-fundraiser/create/:groupID',
      templateUrl: 'templates/poll-fundraisers/create.html',
      controller: 'createPollFundraiserCtrl'
    },{
      name: 'createPollDiscussion',
      url: '/poll-discussion/create/:groupID',
      templateUrl: 'templates/poll-discussions/create.html',
      controller: 'createPollDiscussionCtrl'
    },{
      name: 'createPollEvent',
      url: '/poll-event/create/:groupID',
      templateUrl: 'templates/poll-events/create.html',
      controller: 'createPollEventCtrl'
    },{
      name: 'createPetition',
      url: '/petition/create/:groupID',
      templateUrl: 'templates/petitions/create.html',
      controller: 'createPetitionCtrl'
    }];

  states.forEach(function (state) {
    if (!state.name) {
      return;
    }
    var options = {cache: !!state.cache, url: state.url};
    options.views = {
      'menuContent': {
        templateUrl: state.templateUrl
      }
    };
    if (state.controller) {
      options.views.menuContent.controller = state.controller;
    }
    $stateProvider.state('app.' + state.name, options);
  });

  $urlRouterProvider.otherwise('/preload');

});
