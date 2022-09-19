/* eslint-disable */
import axiosCommon from './axiosCommon'

class Api {
    login(data) {
        return axiosCommon.post('/login', data)
    }
    registration(data) {
        return axiosCommon.post('/create-company-employee', data)
    }
    createSubscription(data) {
        return axiosCommon.post('/create-subscription', data)
    }
    getCountries(data) {
        return axiosCommon.get('/get-countries')
    }
    updatePaymentStatus(link) {
        return axiosCommon.get('/update-payment-status/' + link)
    }
    createEstimate(data) {
        return axiosCommon.post('/create-estimate', data)
    }
    getPlans() {
        return axiosCommon.get('/get-plans')
    }
    getPlans2() {
        return axiosCommon.get('/get-plans2')
    }
    getAddons() {
        return axiosCommon.get('/get-addons')
    }
    selectAddon(id, data) {
        return axiosCommon.post('/select-addon/' + id, data)
    }
    logout() {
        return axiosCommon.get('/logout')
    }
    forgotPasswordSendEmail(data) {
        return axiosCommon.post('/forgot-password-send-email', data)
    }
    resetPassword(data, url) {
        return axiosCommon.post('/' + url, data)
    }
    getCompanyDetails(link) {
        return axiosCommon.get('/get-company-details/' + link)
    }
    getEmployeeRegistrationLink() {
        return axiosCommon.get('/get-employee-registration-link')
    }
    getAuthUser() {
        return axiosCommon.get('/get-auth-user')
    }
    sendLinkToEmail(data) {
        return axiosCommon.post('/send-link-to-email', data)
    }
    getEmployeesList(id, page, data) {
        return axiosCommon.post('/get-employees-list/' + id + '?page=' + page, data)
    }
    exportEmployees(id, data) {
        return axiosCommon.post('/export-employees/' + id, data, { responseType: 'blob' })
    }
    deleteEmployee(id) {
        return axiosCommon.get('/delete-employee/' + id)
    }
    getEmployee(id) {
        return axiosCommon.get('/get-employee/' + id)
    }
    updateEmployee(data) {
        return axiosCommon.post('/update-employee', data)
    }

    getInvitationsList(id, page, data) {
        return axiosCommon.post('/get-invitations-list/' + id + '?page=' + page, data)
    }

    getAnnouncementsList(id) {
        return axiosCommon.get('/get-announcements-list/' + id)
    }
    addAnnouncement(data) {
        return axiosCommon.post('/add-announcement', data)
    }
    deleteAnnouncement(id) {
        return axiosCommon.get('/delete-announcement/' + id)
    }
    getAnnouncement(id) {
        return axiosCommon.get('/get-announcement/' + id)
    }
    updateAnnouncement(data) {
        return axiosCommon.post('/update-announcement', data)
    }
    getAllAnnouncementsList(id, data, page) {
        return axiosCommon.post('/get-all-announcements-list/' + id + '?page=' + page, data)
    }
    addWelcomeNote(data) {
        return axiosCommon.post('/add-welcome-note', data)
    }
    addWelcomeNoteCompany(data) {
        return axiosCommon.post('/add-welcome-note-company', data)
    }
    updateWelcomeNoteCompany(data){
        return axiosCommon.post('/update-welcome-note-company', data)
    }
    deleteWelcomeNote(id) {
        return axiosCommon.get('/delete-welcome-note/'+id)
    }
    getWelcomeNote() {
        return axiosCommon.get('/get-welcome-note')
    }
    getWelcomeNoteList(page){
        return axiosCommon.get('/get-welcome-note-list?page='+page)
    }
    getSingleWelcomeNote(id){
        return axiosCommon.get('/get-single-welcome-note/'+id)
    }
    getSingleWelcomeNoteCompany(){
        return axiosCommon.get('/get-single-welcome-note-company')
    }
    uploadLogo(data, headers) {
        return axiosCommon.post('/upload-logo', data, headers)
    }
    changePassword(data) {
        return axiosCommon.post('/change-password', data)
    }
    sendGroupMessage(data) {
        return axiosCommon.post('/send-group-message', data)
    }
    getGroupMessage(data) {
        return axiosCommon.post('/get-group-message', data)
    }
    getOneToOneMessage(rid, data) {
        return axiosCommon.post('/get-one-to-one-message/' + rid, data)
    }
    sendOneToOneMessage(data) {
        return axiosCommon.post('/send-one-to-one-message', data)
    }
    sendAttachment(data, headers) {
        return axiosCommon.post('/send-attachments', data, headers)
    }
    downloadAttachment(data) {
        return axiosCommon.post('/download-attachments', data, { responseType: 'blob' })
    }
    addResource(data) {
        return axiosCommon.post('/add-resource', data)
    }
    updateResource(data) {
        return axiosCommon.post('/update-resource', data)
    }
    getResource(id) {
        return axiosCommon.get('/get-resource/' + id)
    }
    getResourcesList(page, data) {
        return axiosCommon.post('/get-resources-list' + '?page=' + page, data)
    }
    getResourcesListDashboard() {
        return axiosCommon.get('/get-resources-list-dashboard')
    }
    getCompaniesList() {
        return axiosCommon.get('/get-company-list')
    }
    deleteResource(id) {
        return axiosCommon.get('/delete-resource/' + id)
    }
    downloadFile(id) {
        return axiosCommon.get('/download-file/' + id, { responseType: 'blob' })
    }
    uploadProfileImage(data, headers) {
        return axiosCommon.post('/upload-profile-image', data, headers)
    }
    updateProfile(data) {
        return axiosCommon.post('/update-profile', data)
    }

    addStep(data, headers) {
        return axiosCommon.post('/add-step', data, headers)
    }
    updateStep(data, headers) {
        return axiosCommon.post('/update-step', data, headers)
    }
    getStep(id) {
        return axiosCommon.get('/get-step/' + id)
    }
    getStepsList(page, data) {
        return axiosCommon.post('/get-steps-list' + '?page=' + page, data)
    }
    deleteStep(id) {
        return axiosCommon.get('/delete-step/' + id)
    }
    uploadToolkit(data, headers) {
        return axiosCommon.post('/upload-toolkit', data, headers)
    }
    uploadGuideBook(data, headers) {
        return axiosCommon.post('/upload-guide-book', data, headers)
    }
    deleteToolkit(id) {
        return axiosCommon.post('/delete-toolkit/' + id)
    }
    downloadToolkit(id) {
        return axiosCommon.get('/download-toolkit/' + id, { responseType: 'blob' })
    }
    addOpportunity(data) {
        return axiosCommon.post('/add-opportunity', data)
    }
    updateOpportunity(data) {
        return axiosCommon.post('/update-opportunity', data)
    }
    getOpportunity(id) {
        return axiosCommon.get('/get-opportunity/' + id)
    }
    getOpportunityList(page) {
        return axiosCommon.get('/get-opportunity-list' + '?page=' + page)
    }
    deleteOpportunity(id) {
        return axiosCommon.get('/delete-opportunity/' + id)
    }
    getOpportunityListDashboard() {
        return axiosCommon.get('/get-opportunity-list-dashboard')
    }
    addTodo(data) {
        return axiosCommon.post('/add-todo', data)
    }
    updateTodo(data) {
        return axiosCommon.post('/update-todo', data)
    }
    getTodo(id) {
        return axiosCommon.get('/get-todo/' + id)
    }
    getTodoList(data, page) {
        return axiosCommon.post('/get-todo-list' + '?page=' + page, data)
    }
    deleteTodo(id) {
        return axiosCommon.get('/delete-todo/' + id)
    }
    getTodoListDashboard() {
        return axiosCommon.get('/get-todo-list-dashboard')
    }
    completeTodo(id) {
        return axiosCommon.get('/complete-todo/' + id)
    }
    getWorkshopList(data, page) {
        return axiosCommon.post('/get-workshop-list' + '?page=' + page, data)
    }
    getWorkshopsListDashboard(){
        return axiosCommon.get('/get-workshop-list-dashboard')
    }
    deleteRequestWorkshop(id) {
        return axiosCommon.get('/delete-request-workshop/' + id)
    }
    acceptRequestWorkshop(id) {
        return axiosCommon.get('/accept-request-workshop/' + id)
    }
    rejectRequestWorkshop(id) {
        return axiosCommon.get('/reject-request-workshop/' + id)
    }
    requestWorkshop(data) {
        return axiosCommon.post('/request-workshop', data)
    }
    getRequestedWorkshopListDashboard() {
        return axiosCommon.get('/get-request-workshop-list-dashboard')
    }
    submitAskQuestion(data) {
        return axiosCommon.post('/ask-question', data)
    }
    getQuestionList(page) {
        return axiosCommon.post('/get-question-list' + '?page=' + page)
    }
    getPlanDetailsBySubscriptionId(id) {
        return axiosCommon.get('/get-plan-details-by-subscription-id/' + id)
    }
    getCompaniesList2(page, data) {
        return axiosCommon.post('/get-companies-list?page=' + page, data)
    }
    getProfileTypeList() {
        return axiosCommon.get('/get-profile-type-list')
    }
    getProfileType(id) {
        return axiosCommon.get('/get-profile-type/' + id)
    }
    addProfileTypeF(data) {
        return axiosCommon.post('/add-profile-type', data)
    }
    updateProfileTypeF(data) {
        return axiosCommon.post('/update-profile-type', data)
    }
    deleteProfileType(id) {
        return axiosCommon.get('/delete-profile-type/' + id)
    }
    downloadProfileTypeFile(id) {
        return axiosCommon.get('/download-profile-type-file/' + id, { responseType: 'blob' })
    }
    downloadLearningTools(id){
        return axiosCommon.get('/download-learning-tools/' + id, { responseType: 'blob' })
    }
    getPopupSurveyList() {
        return axiosCommon.post('/get-popup-survey-list')
    }
    getPopupSurvey(id) {
        return axiosCommon.get('/get-popup-survey/' + id)
    }
    getPopupSurveyAnswerList(id) {
        return axiosCommon.get('/get-popup-survey-answer-list/' + id)
    }
    addPopupSurvey(data) {
        return axiosCommon.post('/add-popup-survey', data)
    }
    updatePopupSurvey(data) {
        return axiosCommon.post('/update-popup-survey', data)
    }
    deletePopupSurvey(id) {
        return axiosCommon.get('/delete-popup-survey/' + id)
    }
    addUpdateSection1(data) {
        return axiosCommon.post('/add-update-section1', data)
    }
    addUpdateSection2(data) {
        return axiosCommon.post('/add-update-section2', data)
    }
    addUpdateSection3(data) {
        return axiosCommon.post('/add-update-section3', data)
    }
    getSection1(id) {
        return axiosCommon.get('/get-section1/' + id)
    }
    getSection2(id) {
        return axiosCommon.get('/get-section2/' + id)
    }
    getSection3(id) {
        return axiosCommon.get('/get-section3/' + id)
    }
    deleteSection3Image(id) {
        return axiosCommon.get('/delete-section3-image/' + id)
    }
    getEmployeeDashboardCms() {
        return axiosCommon.get('/get-employee-dashboard-cms')
    }
    getSurveyQuestionsDashboard() {
        return axiosCommon.get('/get-survey-questions-dashboard')
    }
    submitPopupSurvey(data) {
        return axiosCommon.post('/submit-popup-survey', data)
    }
    sendEmail() {
        return axiosCommon.get('/send-email')
    }

    getCheckInSurveyList() {
        return axiosCommon.post('/get-check-in-survey-list')
    }
    getCheckInSurvey(id) {
        return axiosCommon.get('/get-check-in-survey/' + id)
    }
    getCheckInSurveyAnswerList() {
        return axiosCommon.get('/get-check-in-survey-answer-list')
    }
    addCheckInSurvey(data) {
        return axiosCommon.post('/add-check-in-survey', data)
    }
    updateCheckInSurvey(data) {
        return axiosCommon.post('/update-check-in-survey', data)
    }
    deleteCheckInSurvey(id) {
        return axiosCommon.get('/delete-check-in-survey/' + id)
    }
    getCheckInSurveyQuestions(id) {
        return axiosCommon.get('/get-check-in-survey-questions/' + id)
    }
    submitCheckInSurvey(data, id) {
        return axiosCommon.post('/submit-check-in-survey/' + id, data)
    }

    
    getPostWorkshopSurveyList() {
        return axiosCommon.post('/get-post-workshop-survey-list')
    }
    getPostWorkshopSurvey(id) {
        return axiosCommon.get('/get-post-workshop-survey/' + id)
    }
    getPostWorkshopSurveyAnswerList() {
        return axiosCommon.get('/get-post-workshop-survey-answer-list')
    }
    addPostWorkshopSurvey(data) {
        return axiosCommon.post('/add-post-workshop-survey', data)
    }
    updatePostWorkshopSurvey(data) {
        return axiosCommon.post('/update-post-workshop-survey', data)
    }
    deletePostWorkshopSurvey(id) {
        return axiosCommon.get('/delete-post-workshop-survey/' + id)
    }
    getPostWorkshopSurveyQuestions(id) {
        return axiosCommon.get('/get-post-workshop-survey-questions/' + id )
    }
    submitPostWorkshopSurvey(data, id,w_id) {
        return axiosCommon.post('/submit-post-workshop-survey/' + id+ '/'+w_id, data)
    }
    sendPostWorkshopSurveyEmail(id) {
        return axiosCommon.get('/send-post-workshop-survey-email/'+id)
    }

 
    submitCompanyFeedback(data) {
        return axiosCommon.post('/submit-company-feedback', data)
    }
    getFeedbackList(page) {
        return axiosCommon.get('/get-company-feedback-list?page=' + page)
    }
    addWorkshop(data, headers) {
        return axiosCommon.post('/add-workshop', data, headers)
    }
    updateWorkshop(data, headers) {
        return axiosCommon.post('/update-workshop', data, headers)
    }
    getWorkshop(id) {
        return axiosCommon.get('/get-workshop/' + id)
    }
    getWorkshopsList(page, data) {
        return axiosCommon.post('/get-workshops-list' + '?page=' + page, data)
    }
    deleteWorkshop(id) {
        return axiosCommon.get('/delete-workshop/' + id)
    }
    registerForWorkshop(id) {
        return axiosCommon.get('/register-for-workshop/' + id)
    }
    getWorkshopsListForSelect() {
        return axiosCommon.get('/get-workshops-list-for-select')
    }
    addMeeting(data) {
        return axiosCommon.post('/add-meeting', data)
    }
    updateMeeting(id,data) {
        return axiosCommon.post('/update-meeting/'+id, data)
    }
    getMeeting(id) {
        return axiosCommon.get('/get-meeting/' + id)
    }
    getMeetingsList(page, data) {
        return axiosCommon.post('/get-meetings-list' + '?page=' + page, data)
    }
    deleteMeeting(id) {
        return axiosCommon.get('/delete-meeting/' + id)
    }
    getMeetingRecordingsList(id, page, data) {
        return axiosCommon.get('/get-meeting-recording-list/' + id + '?page=' + page, data)
    }
    updateProfileCompany(data, headers) {
        return axiosCommon.post('/update-profile-company', data, headers)
    }
    activeInactiveCompany(id,status){
        return axiosCommon.get('/active-inactive-company/' + id+'/'+status) 
    }
    getWelcomeNoteCompanies() {
        return axiosCommon.get('/get-welcome-note-company-list')
    }

    addLearningPlan(data) {
        return axiosCommon.post('/add-learning-plan', data)
    }
    updateLearningPlan(data) {
        return axiosCommon.post('/update-learning-plan', data)
    }
    deleteLearningPlan(id) {
        return axiosCommon.get('/delete-learning-plan/' + id)
    }
    getLearningPlan(id) {
        return axiosCommon.get('/get-learning-plan/' + id)
    }
    getLearningPlanList(page, data) {
        return axiosCommon.post('/get-learning-plan-list' + '?page=' + page, data)
    }
    getLearningPlanListDashboard(page, data) {
        return axiosCommon.post('/get-learning-plan-list-dashboard')
    }
    
    getLearningPlanFiles(id){
        return axiosCommon.get('/get-learning-plan-files/'+id)
    }
    addLearningPlanFile(data) {
        return axiosCommon.post('/add-learning-plan-file', data)
    }
    updateLearningPlanFile(data) {
        return axiosCommon.post('/update-learning-plan-file', data)
    }
    deleteLearningPlanFile(id) {
        return axiosCommon.get('/delete-learning-plan-file/' + id)
    }
    downloadLearningPlanFile(id) {
        return axiosCommon.get('/download-learning-plan-file/' + id, { responseType: 'blob' })
    }
    getChartData(){
        return axiosCommon.get('/get-chart-data')
    }

}
export default new Api()
