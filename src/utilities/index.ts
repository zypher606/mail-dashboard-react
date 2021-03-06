export function hashCode(targetString: string): string {
  var hash = 0, i, chr;
  if (targetString.length === 0) return hash.toString();
  for (i = 0; i < targetString.length; i++) {
    chr   = targetString.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString();
};

export { StorageManager } from "./StorageManager";