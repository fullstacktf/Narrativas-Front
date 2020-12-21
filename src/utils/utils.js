<<<<<<< HEAD
export const DOMAIN = "http://172.19.164.135:2345"
=======
export const DOMAIN = "https://api.rollify.me"
>>>>>>> 5c129bd64e3630180f4d0b5b529489723b97139e

export function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function deleteCookie(cname) {
  document.cookie = cname + "=" + ";expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
}

