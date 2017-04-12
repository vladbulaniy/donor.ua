<?php
header('Content-Type: text/html; charset=UTF-8');

$data3 = $_POST;


$file = "file.json";

if (file_exists($file)){
    if (is_writable($file)){
        echo "Srabotalo";

        $fp = fopen($file,"w");
        //file_put_contents($file,"\r\n".$data3,FILE_APPEND | LOCK_EX);
        fwrite ($fp,$data3);
        fclose($fp);
    }
    
}
else{
    echo "Ne Srabotalo";
}
?>