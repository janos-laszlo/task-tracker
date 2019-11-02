// tasks are ordered by: incomplete chronologically ascending, then complete chronologically descending
export default function(t1, t2) {
  return !t2.completed && t1.createdAt >= t2.createdAt || t1.completed && (t1.createdAt < t2.createdAt) ? 1 : -1;
}
