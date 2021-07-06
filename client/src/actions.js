//fetches user if authenticated in current session
export const getUser = async () => {
  const res = await fetch('/api/auth', { method: 'GET' });
  let data = await res.json();
  if (res.ok) {
    return data;
  }
  return null;
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

  let data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw new Error(data.error);
  }
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
  let data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw new Error(data.error);
  }
};

export const logoutUser = async () => {
  const res = await fetch('/api/auth/logout', {
    method: 'POST',
  });
  return res.ok;
};
