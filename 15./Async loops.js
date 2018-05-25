function loadUsers(userIds, load, done) {
    var users = []
    userIds.forEach(users.push(load(userIds[i])))
    done(users)
}

module.exports = loadUsers;
