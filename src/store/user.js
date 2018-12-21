export default({
	state: {
		login: JSON.parse(window.sessionStorage.getItem('m_jd_select_login_user_state'))?JSON.parse(window.sessionStorage.getItem('m_jd_select_login_user_state')).login:false
		
		//login:JSON.parse(window.sessionStorage.getItem('jd_login_state'))?JSON.parse(window.sessionStorage.getItem('jd_login_state')).login:false
	},
	mutations: {
		setLoign(state, val) {
			state.login = val;
			window.sessionStorage.setItem('m_jd_select_login_user_state',JSON.stringify({login:val}));
			//window.sessionStorage.setItem('jd_login_state',JSON.stringify({login:val}));
		}
	},
	actions: {

	}
})