export const API_BASE_URL = "http://localhost:3001/v1/";
// export const API_BASE_URL = "https://api.kisattendence.cf/v1";

export const AUTH = {
	LOGIN: "auth/login",
	LOGOUT: "auth/logout",
	CHANGE_PASSWORD: "auth/reset-password",
};

export const USER = {
	GET_ALL_USER: "user/get-all",
	GET_USER: "user/get-current-user",
	GET_BY_ID: "user/get/{id}",
	GET_USER_BY_EMP_ID: "user/get-by/empId",
	UPDATE_USER: "user/update-user/{id}",
	GET_ALL_BDAY: "user/get-all-bday",
	GET_CURRENT_USER_LEVELS_DATA: "user/get-current-user-level",
	GET_TEAM_LIST: "user/my-team-list",
};

export const ROLES = {
	GET: "roles/get",
	GET_USER_ROLE: "roles/get-user-role",
};

export const ATTENDENCE = {
	GET_CURRENT_DATE: "attendence/current-date",
	GET_ATTENDENCE: "attendence/get-attendence",
	CHECK_IN: "attendence/check-in",
	CHECK_OUT: "attendence/check-out",
	BREAK_START: "attendence/break-start",
	BREAK_END: "attendence/break-end",
	GET_SPECIFIC_DATE_ATTENDENCE: "attendence/get-specific-date-attendence",
	GET_TODAY_TEAM_REPORT: "attendence/today-team-report",
	GET_SELECTED_RANGE_ATTENDENCE:
		"attendence/get-selected-range-attednence/{id}",
	GET_CURRENT_MONTH_ATTENDENCE: "attendence/get-current-month-attednence/{id}",
	GET_CURRENT_SESSION: "attendence/get-current-session/{id}",
	DELETE_TIMEOUT: "attendence/remove-timeout/{id}",
	UPDATE_ATTENDENCE: "attendence/update-attednence/{id}",
	// GET_CURRENT_USER_LEVELS_DATA: "attendance/get-current-user-level",
};

export const IMPORTANT_DATES = {
	get: "important-dates/get",
};

export const LEAVES = {
	GET_LEAVES: "leaves/my-leaves",
	GET_LEAVE_BY_ID: "leaves/get-leave-details/{leaveId}",
	GET_LEAVES_DASHBOARD: "leaves/my-dashboard-leaves",
	CANCEL_LEAVES: "leaves/cancel-leave/{id}",
	APPLY: "leaves/apply",
	URGENT_LEAVE: "leaves/urgent_leave/{id}",
	MARK_ABSENT: "admin/mark-absent/{id}",
	TODAY_ON_LEAVE: "leaves/today-on-leave/{id}",
	GET_USER_PENDING_LEAVES: "leaves/get-user-pending-leaves/{id}",
	APPROVE_LEAVE: "leaves/approve/{id}",
	REJECT_LEAVE: "leaves/reject/{id}",
	GET_USER_LEAVES: "leaves/get-user-leaves/{id}",
	GET_TEAM_LIST_ON_LEAVE: "leaves/get-team-employees-leave",
};

export const WORK_FROM_HOME = {
	APPLY: "work-from-home/apply",
	GET_TEAM_LIST_ON_WFH: "work-from-home/get-team-list-employees-on-wfh",
	REJECT_WFH: "work-from-home/reject/{id}",
	APPROVE_WFH: "work-from-home/approve/{id}",
	CANCEL_WFH: "work-from-home/cancel-work-from-home/{id}",
};

export const NOTIFICATION = {
	GET_TAGGED_NOTIFIED_USERS : "leaves/get-tagged-notified-users",
	GET_NOTIFIED_DATA : "leaves/get-notified-data/{notificationId}",
};

export const REQUEST = {
	POST_REQUEST: "request-changes/post-request-changes",
	POST_REQUEST_CHANGES: "request-changes/post-request-change",
	REMOVE_REQUEST: "request-changes/delete-request-changes",
	UPDATE_SEEN_NOTIFICATIONS: "request-changes/update-seen-notifications",
	GET_ALL_NOTIFICATION__REQUESTS_BY_USER_ID: "request-changes/get-all-notification-of-a-user-by-userId"
};

export const THOUGHT = {
	GET_THOUGHT: "thought/get-today-thought",
};
export const PROJECT = {
	GET_ALL_EMPLOYEES: "admin/get-all-employees",
	ADD_PROJECT: "project/add-project",
	GET_ALL_PROJECTS: "project/get-projects",
	GET_PROJECT_BY_ID: "project/get-project-detail/{projectId}",
	UPDATE_PROJECT: "project/project-update/{projectId}",
	GET_PROJECT_DETAILS_BY_ID: "project/get-project-update-detail/{projectId}",
	GET_PROJECT_SUBJECTS_BY_ID:"project/get-project/subjects-by-id/{projectId}",
	UPDATE_PROJECT_MESSAGE:"project/update/project-message/{projectMessageId}",
	ADD_DAILY_STATUS_IN_PROJECT_UPDATE: "project/add-daily-status_in/project_update",
	UPDATE_MESSAGE: "project/update-message/{messageId}",
	ADD_NEW_PROJECT_SUBJECT:"project/create-new/project-subject/{projectId}",
	ADD_DAILY_STATUS: "project/add-daily-status",
	SEND_MAIL_TO_TAGGED_USERS: "project/send-mail-to-tagged-users",
	GET_DAILY_STATUSES: "project/get-daily-status",
	GET_DAILY_STATUS_BY_ID: "project/get-daily-status/{userId}",
	GET_PROJECT_BY_USER_ID: "project/get-user-project/{userId}",
	GET_PROJECT_UPDATED_DETAILS:"project/get-project/updated-details/{projectId}",
	GET_SUBJECT_DETAILS: "project/get-subject-details/{subjectId}",
	DELETE_MESSAGE: "project/delete-message/{messageId}",
	DELETE_PROJECT_MESSAGE:"project/delete/project-message/{projectMessageId}",
	GET_TEAM_PROFILE_IMAGES: "project/get-team-profile-images",
	GET_STATUS_DETAIL_BY_ID: "project/get-status-detail",
	GET_SALES_UPDATES_BY_RECIPIENTS: "project/get-sales-updates-by-recipients",
};

export const USER_FORMS = {
	GET_USER_FORM: "/forms/get-form-by-user-id/{userId}",
	SUBMIT_USER_FORM: "/forms/submit-user-form",
	GET_PENDING_RELIEVING_FORM: "/forms/get-pending-relieving-form-list",
	GET_USER_FORM_DATA_BY_FORM_ID:
		"/forms/get-user-form-data-by-form-id/{formId}",
	UPDATE_USER_RELIEVING_FORM_STATUS_BY_FORM_ID:
		"/forms/update-user-relieving-form-status-by-form-id/{formId}",
};
export const DOCS = {
	CREATE_FOLDER: "/documents/add-document",
	GET_USERS_ALL_FOLDER: "/documents/get-user-documents/{userId}",
	// DELETE_DOC: "/documents/delete-doc/{folderId}",
	DELETE_DOC: "/documents/delete-doc",
	RENAME_DOC: "/documents/rename-doc/{folderId}",
	// EDIT_DOC_PERMISSIONS: "/documents/edit-permissions/{docId}",
	EDIT_DOC_PERMISSIONS: "/documents/edit-permissions",
	GET_DOCUMENT_BY_DOC_ID: "/documents/get-document-details/{docId}",
};
export const ORGANISATION = {
	GET_ALL_EMPLOYEES: "admin/get-all-employees",
};

export const SALARY_SLIP = {
	GET_ALL_SALARY_SLIP_OF_A_USER: "user/get/all-salary-of-a-user/{userId}",
	GET_SALARY_SLIP_BY_USER_ID: "user/get/salary-slip",
};
