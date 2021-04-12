import authReducer, {
    logout,
  } from './authSlice';
  
  describe('auth reducer', () => {
    const initialState = {
      authToken: null,
      loggedIn: false,
      status: 'idle',
    };

    it('should handle initial state', () => {
      expect(authReducer(undefined, { type: 'unknown' })).toEqual({
        authToken: null,
        loggedIn: false,
        status: 'idle',
      });
    });
  
    it('should handle logout', () => {
      const actual = authReducer(initialState, logout());
      expect(actual.authToken).toEqual(null);
    });
  });
  