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