// A mock function to mimic making an async request for data
export function authAPI(authType='login') {
    if (authAPI == 'registration') {
      return new Promise((resolve) =>
        setTimeout(() => resolve({ data: 'register register register register' }), 1000)
      );
    }

    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: 'login login login login login' }), 1000)
    );
  }
  