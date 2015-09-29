<?php

/**config db settings  (normally, I would put this info in a seperate config.php file, 
but I left it here for brevity) 
*/
$host = "localhost";
$db   = "js_study_2015_ng_tarot";
$user = "root";
$pw   = "root";


try {
    // create db handle
    $dbh = new PDO("mysql:host=$host;dbname=$db", $user, $pw);

    // prepare and execute sql 
    $statement = $dbh->prepare("SELECT * FROM tarot_cards");
    $statement->execute();
    // fetch query as associative array
    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    
    // encode query to json so angular can use it
    $json = json_encode($results);
    
    echo $json;
    
    // close the database connection 
    $dbh = null;
}
catch (PDOException $e) {
    echo $e->getMessage();
}



?>