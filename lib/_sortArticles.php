<?php

function sortArticlesByDate($a, $b)
{
    return (strtotime($a["date"]) - strtotime($b["date"]) * -1);
}

function sortArticlesByTitle($a, $b)
{
    return strcasecmp($a['title'], $b['title']);
}

function sortArticlesByUid($a, $b)
{
    return strcasecmp($a['uid'], $b['uid']);
}