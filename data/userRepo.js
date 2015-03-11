

var users = [
  {id: 1, name: 'dank', age: 50},
  {id: 2, name: 'carl', age: 60}
]

function getByName(name) {
  users.filter(function(v) {
    return v.name == name;
  })
}
