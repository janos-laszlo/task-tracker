// tasks are ordered by: incomplete chronologically ascending, then complete chronologically descending
export default function (t1, t2) {
  if (t1.completed < t2.completed) {
    return -1;
  }

  if (t1.completed > t2.completed) {
    return 1;
  }

  if (t1.completed) {
    return compareTaskChronologically(t1, t2) ? 1 : -1;
  } else {
    return compareTaskChronologically(t1, t2) ? -1 : 1;
  }
}

function compareTaskChronologically(t1, t2) {
  let c1, c2;
  c1 = t1.remindAt ? new Date(t1.remindAt) : t1.createdAt;
  c2 = t2.remindAt ? new Date(t2.remindAt) : t2.createdAt;
  return c1 < c2;
}