function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(checkedUser){
            return goodUsers.some(function(goodUser){
                if(checkedUser === goodUser)
                    return true;
            })
        })
    };
}

module.exports = checkUsersValid
