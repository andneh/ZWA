<?php
function addUser(
    $username,
    $fname,
    $lname,
    $password,
) {
    // create and add new user to the database
    $data = loadDB();
    array_push($data['users'], user($username, $fname, $lname, $password));
    saveDB($data);
}

function getUsers()
{
    // get all users from the data array
    return loadDB()["users"];
}

function getUserByUsername($username)
{
    // get user unit from data array by user name
    foreach (getUsers() as $user) {
        if ($username == $user['username']) {
            return $user;
        }
    }
    // if no user return NULL
    return NULL;
}


function getUserByUid($uid)
{
    // get user unit from data array by user id
    foreach (getUsers() as $user) {
        if ($uid == $user['uid']) {
            return $user;
        }
    }
    // if no user return NULL
    return NULL;
}
