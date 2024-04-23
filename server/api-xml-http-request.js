// https://jsonplaceholder.typicode.com/
function invokeXmlHttpRequest() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(xhttp.responseText);
    }
  };
  xhttp.open(
    'GET',
    'https://jsonplaceholder.typicode.com/users',
    true //async
  );
  xhttp.send();
}
