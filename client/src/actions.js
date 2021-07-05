//fetches user if authenticated in current session
export const getUser = async () => {
  const res = await fetch('/api/auth', { method: 'GET' });
  const user = await res.json();
  return user;
};

export const loginUser = async (username, password) => {
  const body = JSON.stringify({ username, password });

  const res = await fetch('/api/auth', {
    method: 'POST',
    body: body,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = res.json();
  return data;
};

export const registerUser = async (username, password) => {
  const body = JSON.stringify({ username, password });

  const res = await fetch('/api/users', {
    method: 'POST',
    body: body,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = res.json();
  return data;
};

export const logoutUser = async () => {
  const res = await fetch('/api/auth/logout', {
    method: 'POST',
  });
  return res.ok;
};
