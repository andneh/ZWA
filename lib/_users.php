<?php
require("db/_db.php");


function addUser(
    $login,
    $fname,
    $lname,
    $password,
)
{
    $data = loadDB();
    array_push($data['users'], user($login,$fname,$lname,$password));
    saveDB($data);

}

function getUsers(){
    return loadDB()["users"];
}

function getUserByUsername($username) {
        foreach(getUsers() as $user) {
            if ($username == $user['username']) {
                return $user;
            }
        }
        return NULL;
    }

    function getUserByUid($uid) {
        foreach(getUsers() as $user) {
            if ($uid == $user['uid']) {
                return $user;
            }
        }
        return NULL;
    }

?>