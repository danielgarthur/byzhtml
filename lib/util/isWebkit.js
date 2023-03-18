export function isWebkit() {
  const userAgent = navigator.userAgent.toLowerCase();

  // This should detect whether the user is using the Safari desktop browser
  if (
    userAgent.indexOf('safari') !== -1 &&
    userAgent.indexOf('chrome') === -1 &&
    userAgent.indexOf('chromium') === -1 &&
    userAgent.indexOf('android') === -1
  ) {
    return true;
  }

  // This should detect whether the user is using the Safari iOS browser
  if (
    userAgent.indexOf('ipad') !== -1 ||
    userAgent.indexOf('iphone') !== -1 ||
    userAgent.indexOf('ipod') !== -1
  ) {
    return true;
  }

  return false;
}
