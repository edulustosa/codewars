// https://www.codewars.com/kata/52b7ed099cdc285c300001cd

function sumIntervals(intervals = []) {
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const nextInterval = intervals[i];

    if (nextInterval[0] <= currentInterval[1]) {
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
    } else {
      mergedIntervals.push(currentInterval);
      currentInterval = nextInterval;
    }
  }

  mergedIntervals.push(currentInterval);

  return mergedIntervals.reduce(
    (sum, interval) => sum + (interval[1] - interval[0]),
    0
  );
}

console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ])
);
