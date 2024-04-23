// https://jsonplaceholder.typicode.com/
function invokefetch() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  console.log('apiUrl: ', apiUrl);

  // Do xhr request for fetching data from the server
  fetch(apiUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9',
      'cache-control': 'no-cache',
      pragma: 'no-cache',
      'sec-ch-device-memory': '8',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
    },
    // referrer: `${referrerUrl}`,
    // referrerPolicy: 'strict-origin-when-cross-origin',
    // body: null,
    // mode: 'cors',
    // credentials: 'include',
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('result: ', result);
    })
    .catch((error) => {
      console.error('error: ', error);
    });
}
