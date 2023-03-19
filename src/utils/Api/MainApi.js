
export const signup = (user) => {
return fetch('https://moviesapi.filimonovalexey.nomoredomains.rocks/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response => response.json())
}

export const signin = (user) => {
  return fetch('https://moviesapi.filimonovalexey.nomoredomains.rocks/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
  }


const token = localStorage.getItem('token');
    
export const f00 = () => {
    fetch('/api/films', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
        });
}