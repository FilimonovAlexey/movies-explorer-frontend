const options = {
  baseUrl: "https://moviesapi.filimonovalexey.nomoredomains.rocks",
  headers: {
    "Content-type": "application/json",
  },
};

export const signup = (user) => {
return fetch(`${options.baseUrl}/signup`, {
    method: 'POST',
    headers: options.headers,
    body: JSON.stringify(user)
  }).then(response => response.json())
}

export const signin = (user) => {
  return fetch(`${options.baseUrl}/signin`, {
      method: 'POST',
      headers: options.headers,
      body: JSON.stringify(user)
    })
      .then(response => response.json())
  }

export const getProfile = (data) => {
  const token = localStorage.getItem("token");
  return fetch(`${options.baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(response => response.json())
}

export const updateProfile = (user) => {
  const token = localStorage.getItem("token");
  return fetch(`${options.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user)
  }).then(response => response.json())
}