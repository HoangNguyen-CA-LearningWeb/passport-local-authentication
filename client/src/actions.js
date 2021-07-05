//fetches user if authenticated in current session
export const getUser = async () => {
  const res = await fetch('/api/auth', { method: 'GET' });
  let user = null;
  if (res.ok) {
    user = await res.json();
  }
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
  let data = null;
  if (res.ok) {
    data = res.json();
  } // handle error if !res.ok
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
  let data = null;
  if (res.ok) {
    data = res.json();
  }
  return data;
};

export const logoutUser = async () => {
  const res = await fetch('/api/auth/logout', {
    method: 'POST',
  });
  return res.ok;
};
