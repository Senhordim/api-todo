module.exports = function(req, res, next) {
  rs.header('Access-Control-Allow-Origin', '*')
  rs.header('Access-Control-Allow-Mathods', 'GET, POST, OPTIONS, PUT, PATH, DELETE')
  rs.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
}