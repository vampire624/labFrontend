import Router from 'vue-router'
import Vue from 'vue'

import Index from '../pages/index'
import Achievement from '../pages/achievement.vue'
import Project from '../pages/project.vue'
import Introduction from '../pages/introduct.vue'
import Staff from '../pages/staff.vue'
import RelatedLink from '../pages/relatedLink.vue'

import StaffTutor from '../pages/staffTutor.vue'
import StaffWorking from '../pages/staffWorking.vue'
import StaffWorked from '../pages/staffWorked.vue'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'index',
      path: '/',
      component: Index,
    }, {
      name: 'achievement',
      path: '/achievement',
      component: Achievement,
    }, {
      name: 'project',
      path: '/project',
      component: Project,
    }, {
      name: 'staff',
      path: '/staff',
      component: Staff,
      children: [
        {
          path: 'tutor',
          component: StaffTutor,
        },
        {
          path: 'working',
          component: StaffWorking,
        },
        {
          path: 'worked',
          component: StaffWorked,
        }
      ],
      redirect: '/staff/tutor',
    }, {
      name: 'relatedLink',
      path: '/relatedLink',
      component: RelatedLink,
    }, {
      name: 'introduct',
      path: '/introduct',
      component: Introduction
    }, {
      name: 'other',
      path: '*',
      redirect: '/'
    }

  ]
})

export default router