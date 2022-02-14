const user = function (data) {
  return `${data} is logged in`;
};

let id = function (id) {
  return `${id}`;
};

let email = function (email) {
  return email;
};

module.exports = {
  user,
  id,
  email,
};
