export function rupiahFormat(params = "") {
  return params.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}