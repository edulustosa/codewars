function formatDuration(seconds) {
  let duration = seconds;

  const time = {
    year: 31536000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  const result = [];

  if (duration === 0) return "now";

  for (let [unit, value] of Object.entries(time)) {
    if (duration >= value) {
      const count = Math.floor(duration / value);
      result.push(`${count} ${unit}${count !== 1 ? "s" : ""}`);
      duration %= value;
    }
  }

  return result.join(", ").replace(/,([^,]*)$/, " and$1");
}

console.log(formatDuration(10000));
