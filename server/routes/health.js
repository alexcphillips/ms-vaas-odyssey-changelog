function health(req, res) {
  return res.status(200).json({
    isHealthy: true
  });
}

module.exports = health;
