export function getEOL() {
  const isWindows = navigator.appVersion.includes("Win");
  const isMacOS = navigator.appVersion.includes("Mac");
  return isWindows ? "\r\n" : isMacOS ? "\r" : "\n";
}

