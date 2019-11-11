
const APP_KEY = 'ReactTrackedTest.';
const KEY_PREFIX = APP_KEY + '.184ef4caa76e4386b07cc5fcda6c56a1.';
const LAST_AUTH_USER_KEY = KEY_PREFIX + 'LastAuthUser';

export const deleteTokensFromLocalStorage = (keyPrefix?: string | null, lastAuthUser?: string | null) => {
	if (!keyPrefix) {
		keyPrefix = KEY_PREFIX;
	}
	if (!lastAuthUser) {
		lastAuthUser = localStorage.getItem(LAST_AUTH_USER_KEY);
	}
	const idTokenKey = keyPrefix + lastAuthUser + '.idToken';
	const accessTokenKey = keyPrefix + lastAuthUser + '.accessToken';
	const refreshTokenKey = keyPrefix + lastAuthUser + '.refreshToken';
	localStorage.removeItem(accessTokenKey);
	localStorage.removeItem(idTokenKey);
	localStorage.removeItem(refreshTokenKey);
};

export const getIdTokenFromLocalStorage = (idTokenKey?: string | null) => {
	if (!idTokenKey) {
		const lastAuthUser = localStorage.getItem(LAST_AUTH_USER_KEY);
		idTokenKey = KEY_PREFIX + lastAuthUser + '.idToken';
	}
	return localStorage.getItem(idTokenKey);
};

export const setIdTokenInLocalStorage = (idTokenKey: string | null, idToken: string) => {
	if (!idTokenKey) {
		const lastAuthUser = localStorage.getItem(LAST_AUTH_USER_KEY);
		idTokenKey = KEY_PREFIX + lastAuthUser + '.idToken';
	}
	if (idToken && idToken !== 'undefined') {
		localStorage.setItem(idTokenKey, idToken);
	}
};

export const setLastAuthUserInLocalStorage = (lastAuthUserKey: string | null, lastAuthUser: string) => {
	if (!lastAuthUserKey) {
		lastAuthUserKey = LAST_AUTH_USER_KEY;
	}
	if (lastAuthUser && lastAuthUser !== 'undefined') {
		localStorage.setItem(lastAuthUserKey, lastAuthUser);
	}
};
