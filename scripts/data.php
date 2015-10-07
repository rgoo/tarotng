
<?php

require_once 'config.php';

class Database 
{
    private static $connection;

    private $dbName = null, $dbHost = null, $dbPass = null, $dbUser = null;

    public static function connect($dbDetails = array()){
        if (!isset(self::$connection)) {
            self::$connection = new self($dbDetails);
        } 
        
        return self::$connection;
    }

    // private constructor   
    private function __construct($dbDetails = array())
    {
        // $dbDetails array from config.php
        $this->dbName = $dbDetails['db_name'];
        $this->dbHost = $dbDetails['db_host'];
        $this->dbUser = $dbDetails['db_user'];
        $this->dbPass = $dbDetails['db_pass'];

        try {
            $this->dbh = new PDO('mysql:host='.$this->dbHost.';dbname='.$this->dbName, $this->dbUser, $this->dbPass);

        }
        catch (PDOException $e) {
            echo $e->getMessage();
        }

        $this->tarot_query($this->dbh);
    }

    public function tarot_query($dbh){
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



}

$DB =  Database::connect($dbDetails);

?>
