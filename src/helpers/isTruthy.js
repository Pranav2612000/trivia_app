export default function isTruthy(value) {
  if (value.toLowerCase() === "false") {
    return false;
  } else {
    return Boolean(value);
  }
}
