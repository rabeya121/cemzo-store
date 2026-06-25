export function getStars(rate) {
  const full = Math.floor(rate);
  const half = rate - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return { full, half, empty };
}

export function truncate(str, n) {
  return str.length > n ? str.slice(0, n) + "..." : str;
}
