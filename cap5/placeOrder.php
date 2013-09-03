<?php
  //erro de verificação
  $order = $_REQUEST['order'];
  $address = $_REQUEST['address'];

  if(strlen($order) <= 0) {
    header("Status: no order was received.", true, 400);
    //alguns navegadores web, como o safari, relatarão um código de status UNDEFINED a menos que haja alguma resposta do servidor
    //Através de uma resposta do envio de uma resposta em branco, o codigo status será relatado por esses navegadores
    echo " "; 
    exit;
  }

  if(strlen($address) <= 0) {
    header("Status: no address was received.", true, 400);
    //alguns navegadores web, como o safari, relatarão um código de status UNDEFINED a menos que haja alguma resposta do servidor
    //Através de uma resposta do envio de uma resposta em branco, o codigo status será relatado por esses navegadores
    echo " "; 
    exit;
  }

  echo rand(10, 20);
?>