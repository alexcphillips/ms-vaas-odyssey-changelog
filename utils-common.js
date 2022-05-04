function print(msg) {
  let message = {
    repo: "ms-daas-odyssey-github",
    timestamp: getTimestamp(),
    payload: msg
  };
  console.log(JSON.stringify(message));
}

function getTimestamp() {
  return new Date().toISOString();
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

module.exports = { sleep, print };
