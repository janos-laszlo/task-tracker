// tasks are ordered by: incomplete chronologically ascending, then complete chronologically descending
export default function (t1, t2) {
  if (t1.completed < t2.completed) {
    return -1;
  }

  if (t1.completed > t2.completed) {
    return 1;
  }

  if (t1.completed) {
    return t1.createdAt < t2.createdAt ? 1 : -1;
  } else {
    return t1.createdAt < t2.createdAt ? -1 : 1;
  }
}
