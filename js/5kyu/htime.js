function humanReadable(seconds) {
  const time = new Date(seconds * 1000);
  const timeSeconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = Math.floor(seconds / 3600);

  return `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${timeSeconds < 10 ? "0" + timeSeconds : timeSeconds}`;
}

console.log(humanReadable(359999));
