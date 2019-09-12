/**
 * 说明：封装fetch 1.跨域get/post 2. 异步get/post
 * @function fetch
 * @param obj
 * @Author Visupervi
 */

function fetch(obj = {}) {
  let requestHeader = {};
  if (obj.type.toLowerCase() == "post") {
    requestHeader.method = "POST";
    requestHeader.headers = {"Content-Type": "application/x-www-form-urlencoded"};
    requestHeader.body = obj.data;
  } else {
    requestHeader.method = "GET";
    obj.url = obj.url + params(obj.data)
    obj.data = null;
  }
  return new Promise((resolve, reject) => {
    fetch(obj.url, requestHeader.headers).then((result) => {
      if (result.status !== 200) {
        throw new Error('Fail to get response with status ' + result.status);
      }
      result.json().then((res) => {
        res = JSON.parse(res);
        res(res);
      }).catch((error) => {
        reject(error);
      });
    }).catch((err) => {
      reject(err);
    })
  })
}
function params(options) {
  var str = "";
  for (var attr in options) {
    str += attr + "=" + options[attr] + "&";
  }
  return str.slice(0, -1);
}