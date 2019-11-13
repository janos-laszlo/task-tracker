function format(date) {  
  return date.toLocaleString();
}

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

export { format, isValidDate };