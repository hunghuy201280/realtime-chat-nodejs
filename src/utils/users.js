const users = [];

function addUser({ id, username, room }) {
  //clean and validate data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  if (!username || !room) {
    return {
      error: "Username and room are required",
    };
  }

  //check for existing user

  const existingUser = users.find((it) => {
    return it.username === username && it.room === room;
  });

  //Validate username
  if (existingUser) {
    return {
      error: "Username is in use!",
    };
  }

  // Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
}
function removeUser(id) {
  const index = users.findIndex((it) => it.id === id);
  if (index != -1) {
    return users.splice(index, 1)[0];
  }
}
function getUser(id) {
  const result = users.find((it) => it.id === id);
  return result;
}

function getUsersInRoom(room) {
  return users.filter((it) => it.room === room);
}

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
