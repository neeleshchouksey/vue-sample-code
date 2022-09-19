/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
// import Chargebee from '@/components/Chargebee'
import CreateCompany from '@/components/CreateCompany'
import Checkout from '@/components/Checkout'
import PaymentSuccess from '@/components/PaymentSuccess'
import Registration from '@/components/Registration'
import Login from '@/components/Login'
import Plan from '@/components/Plan'
import ResetPassword from '@/components/ResetPassword'
import SubmitCheckInSurvey from '@/components/SubmitCheckInSurvey'
import SubmitPostWorkshopSurvey from '@/components/SubmitPostWorkshopSurvey'

/******Load Employer Components*********/

import AskQuestion from '@/components/employer/AskQuestion'
import WelcomeNote from '@/components/employer/WelcomeNote'
import Profile from '@/components/employer/Profile'
import Dashboard from '@/components/employer/dashboard/Dashboard'
import MembershipDetails from '@/components/employer/MembershipDetails'
import Resources from '@/components/employer/Resources'
import Workshop from '@/components/employer/Workshop'
import TeamManagement from '@/components/employer/team-management/TeamManagement'
import RegistrationLink from '@/components/employer/team-management/RegistrationLink'
import Employees from '@/components/employer/team-management/Employees'
import Invitations from '@/components/employer/team-management/Invitations'
import Announcements from '@/components/employer/Announcements'
import Settings from '@/components/employer/Settings'
import MessageMyTeam from '@/components/employer/MessageMyTeam'
import OneToOneChat from '@/components/employer/OneToOneChat'
import ViewStep from '@/components/employer/dashboard/ViewStep'
import Opportunity from '@/components/employer/Opportunity'
import Todo from '@/components/employer/Todo'
import ViewTodo from '@/components/employer/ViewTodo'
import RequestWorkshop from '@/components/employer/RequestWorkshop'
import FeedbackEmployee from '@/components/employer/FeedbackEmployee'

/********Load employee components */

import EmpDashboard from '@/components/employee/Dashboard'
import EmpProfile from '@/components/employee/Profile'
import EmpResources from '@/components/employee/Resources'
import EmpAnnouncements from '@/components/employee/Announcements'
import EmpAskQuestion from '@/components/employee/AskQuestion'
import EmpTodo from '@/components/employee/Todo'
import EmpViewTodo from '@/components/employee/ViewTodo'
import EmpRequestWorkshop from '@/components/employee/RequestWorkshop'
import EmpCompanyFeedback from '@/components/employee/CompanyFeedback'
import EmpWorkshop from '@/components/employee/Workshops'
import EmpViewWorkshop from '@/components/employee/ViewWorkshop'
import EmpMessageMyTeam from '@/components/employee/MessageMyTeam'
import EmpOneToOneChat from '@/components/employee/OneToOneChat'
import EmpWelcomeNote from '@/components/employee/WelcomeNote'
import EmpLearningPlan from '@/components/employee/LearningPlan'
import EmpLearningPlanView from '@/components/employee/LearningPlanView'
import EmpMeetingRecording from '@/components/employee/MeetingRecording'

/********Load admin components */

import AdminDashboard from '@/components/admin/dashboard/Dashboard'
import AdminStepConfiguration from '@/components/admin/steps/StepConfiguration'
import AdminViewStep from '@/components/admin/steps/ViewStep'
import AdminResources from '@/components/admin/Resources'
import AdminOpportunity from '@/components/admin/Opportunity'
import AdminTodo from '@/components/admin/Todo'
import AdminRequestWorkshop from '@/components/admin/RequestWorkshop'
import AdminAskYourCareTeam from '@/components/admin/AskYourCareTeam'
import AdminCompanies from '@/components/admin/Companies'
import AdminEmployeeProfileType from '@/components/admin/EmployeeProfileType'
import AdminPopupSurveys from '@/components/admin/PopupSurvey'
import AdminPopupSurveyView from '@/components/admin/PopupSurveyView'
import AdminCheckInSurveys from '@/components/admin/CheckInSurvey'
import AdminCheckInSurveyView from '@/components/admin/CheckInSurveyView'
import AdminPostWorkshopSurveys from '@/components/admin/PostWorkshopSurvey'
import AdminPostWorkshopSurveyView from '@/components/admin/PostWorkshopSurveyView'
import AdminEmployeeProfileTypeView from '@/components/admin/EmployeeProfileTypeView'
import AdminSendEmail from '@/components/admin/SendEmail'
import AdminWorkshop from '@/components/admin/Workshop'
import AdminWorkshopView from '@/components/admin/WorkshopView'
import AdminMeeting from '@/components/admin/Meeting'
import AdminMeetingRecording from '@/components/admin/MeetingRecording'
import AdminWelcomeNote from '@/components/admin/WelcomeNote'
import AdminLearningPlan from '@/components/admin/LearningPlan'
import AdminLearningPlanView from '@/components/admin/LearningPlanView'
Vue.use(Router)



function guardMyroute(to, from, next) {
  var isAuthenticated = false
  // var backAuth = getAuthUser()
  if (localStorage.getItem('token')) {
    isAuthenticated = true
  } else {
    isAuthenticated = false
  }
  if (isAuthenticated) {
    next()
  } else {
    next('/login')
  }
}

function getAuthUser() {
  Api.getAuthUser().then(response => {
    let that = this
    return response.data.res
  }
  )
}

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Plan',
      component: Plan,
    },
    {
      path: '/create-company',
      name: 'Create Company',
      component: CreateCompany,
    },
    {
      path: '/checkout/:link',
      name: 'Checkout',
      component: Checkout,
    },
    {
      path: '/payment-success/:link',
      name: 'PaymentSuccess',
      component: PaymentSuccess
    },
    {
      path: '/registration/:link',
      name: 'Employee Registration',
      component: Registration,
    },
    {
      path: '/reset-password/:link',
      name: 'Reset Password',
      component: ResetPassword
    },
    {
      path: '/create-password/:link',
      name: 'Reset Password',
      component: ResetPassword
    },
    {
      path: '/submit-checkin-survey/:link',
      name: 'SubmitCheckInSurvey',
      component: SubmitCheckInSurvey
    },
    {
      path: '/submit-post-workshop-survey/:link/:w_id',
      name: 'SubmitPostWorkshopSurvey',
      component: SubmitPostWorkshopSurvey
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/employer/team-management',
      beforeEnter: guardMyroute,
      name: 'TeamManagement',
      component: TeamManagement,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/team-management/registration-link',
      beforeEnter: guardMyroute,
      name: 'RegistrationLink',
      component: RegistrationLink,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/team-management/employees',
      beforeEnter: guardMyroute,
      name: 'Employees',
      component: Employees,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/team-management/invitations',
      beforeEnter: guardMyroute,
      name: 'Invitations',
      component: Invitations,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/dashboard',
      beforeEnter: guardMyroute,
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/profile',
      beforeEnter: guardMyroute,
      name: 'Profile',
      component: Profile,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/membership-details',
      beforeEnter: guardMyroute,
      name: 'MembershipDetails',
      component: MembershipDetails,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/resources',
      beforeEnter: guardMyroute,
      name: 'Resources',
      component: Resources,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/workshops',
      beforeEnter: guardMyroute,
      name: 'Workshop',
      component: Workshop,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/ask-question',
      beforeEnter: guardMyroute,
      name: 'AskQuestion',
      component: AskQuestion,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/announcements',
      beforeEnter: guardMyroute,
      name: 'Announcements',
      component: Announcements,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/settings',
      beforeEnter: guardMyroute,
      name: 'Settings',
      component: Settings,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/welcome-note',
      beforeEnter: guardMyroute,
      name: 'WelcomeNote',
      component: WelcomeNote,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/message-my-team',
      beforeEnter: guardMyroute,
      name: 'MessageMyTeam',
      component: MessageMyTeam,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/one-to-one-chat/:id',
      beforeEnter: guardMyroute,
      name: 'OneToOneChat',
      component: OneToOneChat,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/view-step/:id',
      beforeEnter: guardMyroute,
      name: 'ViewStep',
      component: ViewStep,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/opportunities',
      beforeEnter: guardMyroute,
      name: 'Opportunities',
      component: Opportunity,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/todo',
      beforeEnter: guardMyroute,
      name: 'Todo',
      component: Todo,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/todo/:id',
      beforeEnter: guardMyroute,
      name: 'ViewTodo',
      component: ViewTodo,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/request-workshop',
      beforeEnter: guardMyroute,
      name: 'RequestWorkshop',
      component: RequestWorkshop,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/feedback-by-employees',
      beforeEnter: guardMyroute,
      name: 'FeedbackEmployee',
      component: FeedbackEmployee,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    {
      path: '/employer/view-workshop/:id',
      beforeEnter: guardMyroute,
      name: 'AdminWorkshopView',
      component: AdminWorkshopView,
      meta: { requiresAuth: true, employerAuth: true, employeeAuth: false, adminAuth: false }
    },
    // routes for employees
    {
      path: '/employee/dashboard',
      beforeEnter: guardMyroute,
      name: 'Dashboard',
      component: EmpDashboard,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
    {
      path: '/employee/profile',
      beforeEnter: guardMyroute,
      name: 'Profile',
      component: EmpProfile,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
    {
      path: '/employee/message-my-team',
      beforeEnter: guardMyroute,
      name: 'MessageMyTeam',
      component: EmpMessageMyTeam,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
    {
      path: '/employee/one-to-one-chat/:id',
      beforeEnter: guardMyroute,
      name: 'OneToOneChat',
      component: EmpOneToOneChat,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
    {
      path: '/employee/resources',
      beforeEnter: guardMyroute,
      name: 'Resources',
      component: EmpResources,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
    {
      path: '/employee/announcements',
      beforeEnter: guardMyroute,
      name: 'Announcements',
      component: EmpAnnouncements,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
    {
      path: '/employee/ask-question',
      beforeEnter: guardMyroute,
      name: 'AskQuestion',
      component: EmpAskQuestion,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
    {
      path: '/employee/todo',
      beforeEnter: guardMyroute,
      name: 'Todo',
      component: EmpTodo,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
    {
      path: '/employee/todo/:id',
      beforeEnter: guardMyroute,
      name: 'ViewTodo',
      component: EmpViewTodo,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
    {
      path: '/employee/request-workshop',
      beforeEnter: guardMyroute,
      name: 'RequestWorkshop',
      component: EmpRequestWorkshop,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
    {
      path: '/employee/feedback-to-company',
      beforeEnter: guardMyroute,
      name: 'CompanyFeeback',
      component: EmpCompanyFeedback,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
    {
      path: '/employee/workshops',
      beforeEnter: guardMyroute,
      name: 'Workshops',
      component: EmpWorkshop,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
    {
      path: '/employee/workshop/:id',
      beforeEnter: guardMyroute,
      name: 'ViewWorkshop',
      component: EmpViewWorkshop,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
    {
      path: '/employee/welcome-note',
      beforeEnter: guardMyroute,
      name: 'WelcomeNote',
      component: EmpWelcomeNote,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
    {
      path: '/employee/my-learning-plan',
      beforeEnter: guardMyroute,
      name: 'LearningPlan',
      component: EmpLearningPlan,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
    {
      path: '/employee/my-learning-plan/:id',
      beforeEnter: guardMyroute,
      name: 'LearningPlanView',
      component: EmpLearningPlanView,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
 
    {
      path: '/employee/meeting-recordings/:id',
      beforeEnter: guardMyroute,
      name: 'EmpMeetingRecording',
      component: EmpMeetingRecording,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: true, adminAuth: false }
    },
    //routes for admin
    {
      path: '/admin/payment-success/:link',
      name: 'PaymentSuccess',
      component: PaymentSuccess,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/dashboard',
      beforeEnter: guardMyroute,
      name: 'Dashboard',
      component: AdminDashboard,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/steps-configuration',
      beforeEnter: guardMyroute,
      name: 'StepConfiguration',
      component: AdminStepConfiguration,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/view-step/:id',
      beforeEnter: guardMyroute,
      name: 'ViewStep',
      component: AdminViewStep,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/resources',
      beforeEnter: guardMyroute,
      name: 'Resources',
      component: AdminResources,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/opportunities',
      beforeEnter: guardMyroute,
      name: 'Opportunities',
      component: AdminOpportunity,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/todo',
      beforeEnter: guardMyroute,
      name: 'Todo',
      component: AdminTodo,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/request-workshop',
      beforeEnter: guardMyroute,
      name: 'RequestWorkshop',
      component: AdminRequestWorkshop,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/ask-your-care-team',
      beforeEnter: guardMyroute,
      name: 'AskYourCareTeam',
      component: AdminAskYourCareTeam,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/companies',
      beforeEnter: guardMyroute,
      name: 'Companies',
      component: AdminCompanies,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/employee-profile-type',
      beforeEnter: guardMyroute,
      name: 'EmployeeProfileType',
      component: AdminEmployeeProfileType,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/employee-profile-type/:id',
      beforeEnter: guardMyroute,
      name: 'EmployeeProfileTypeView',
      component: AdminEmployeeProfileTypeView,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/popup-surveys',
      beforeEnter: guardMyroute,
      name: 'PopupSurveys',
      component: AdminPopupSurveys,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/popup-survey/:id',
      beforeEnter: guardMyroute,
      name: 'ViewPopupSurvey',
      component: AdminPopupSurveyView,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/check-in-surveys',
      beforeEnter: guardMyroute,
      name: 'CheckInSurveys',
      component: AdminCheckInSurveys,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/check-in-survey/:id',
      beforeEnter: guardMyroute,
      name: 'ViewCheckInSurvey',
      component: AdminCheckInSurveyView,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/post-workshop-surveys',
      beforeEnter: guardMyroute,
      name: 'PostWorkshopSurvey',
      component: AdminPostWorkshopSurveys,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/post-workshop-survey/:id',
      beforeEnter: guardMyroute,
      name: 'PostWorkshopSurveyView',
      component: AdminPostWorkshopSurveyView,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/send-email',
      beforeEnter: guardMyroute,
      name: 'SendEmail',
      component: AdminSendEmail,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/workshops',
      beforeEnter: guardMyroute,
      name: 'AdminWorkshop',
      component: AdminWorkshop,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/view-workshop/:id',
      beforeEnter: guardMyroute,
      name: 'AdminWorkshopView',
      component: AdminWorkshopView,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/meetings',
      beforeEnter: guardMyroute,
      name: 'AdminMeeting',
      component: AdminMeeting,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/meeting-recordings/:id',
      beforeEnter: guardMyroute,
      name: 'AdminMeetingRecording',
      component: AdminMeetingRecording,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/checkout/:link',
      beforeEnter: guardMyroute,
      name: 'Checkout',
      component: Checkout,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/welcome-note',
      beforeEnter: guardMyroute,
      name: 'WelcomeNote',
      component: AdminWelcomeNote,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/learning-plan',
      beforeEnter: guardMyroute,
      name: 'AdminLearningPlan',
      component: AdminLearningPlan,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
    {
      path: '/admin/learning-plan/:id',
      beforeEnter: guardMyroute,
      name: 'AdminLearningPlanView',
      component: AdminLearningPlanView,
      meta: { requiresAuth: true, employerAuth: false, employeeAuth: false, adminAuth: true }
    },
  ],
  mode: 'history',
  base: '/',
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    var token = localStorage.getItem('token')
    if (token) {
      var user = localStorage.getItem('userData')
      var company = localStorage.getItem('companyData')
      var c = JSON.parse(company)
      var u = JSON.parse(user)
      if (to.meta.employerAuth) {
        if (u.role == "COMPANY" && c.role == "COMPANY_ADMIN") {
          next()
        } else {
          console.log(u);
          if (u.role == "COMPANY" && c.role == "COMPANY_EMP") {
            next('employee/dashboard')
          } else {
            next('admin/dashboard')
          }
        }
      } else if (to.meta.employeeAuth) {
        if (u.role == "COMPANY" && c.role == "COMPANY_EMP") {
          next()
        } else {
          if (u.role == "COMPANY" && c.role == "COMPANY_ADMIN") {
            next('employer/dashboard')
          } else {
            next('admin/dashboard')
          }
        }
      } else if (to.meta.adminAuth) {
        if (u.role == "ADMIN") {
          next()
        } else {
          if (u.role == "COMPANY" && c.role == "COMPANY_ADMIN") {
            next('employer/dashboard')
          } else {
            next('employee/dashboard')
          }
        }
      } else {
        next()
      }
    } else {
      console.log("in else");
      console.log(next())
      next()
    }
  } else {
    var token = localStorage.getItem('token')
    if (token) {
      var user = localStorage.getItem('userData')
      var company = localStorage.getItem('companyData')
      var c = JSON.parse(company)
      var u = JSON.parse(user)

      if (u.role == "COMPANY" && c.role == "COMPANY_EMP") {
        next('employee/dashboard')
      }
      else if (u.role == "COMPANY" && c.role == "COMPANY_ADMIN") {
        next('employer/dashboard')
      }
      else {
        next('admin/dashboard')
      }
    } else {
      next()
    }
  }
})