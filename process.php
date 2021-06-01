



<?php

$customerid = $_POST["customerid"];
$pin = $_POST["pin"];  
$result = mysqli_query( $conn_to_ashok," SELECT item_description from post_box, mail_received
                         WHERE pin='$pin' and post_box.customer_id ='$customerid'");
if(mysqli_fetch_array($result)){
	while($row = mysqli_fetch_array($result)){
        echo $row[0] ;
        echo "<br>";
    }
    
}else{
	include 'index.html';
}
?>