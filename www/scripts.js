function onStartAck(epoch) {
  alert("received acknowledgment from the server~ [onStart event] => " + epoch);
}

function changeStatus(status) {
  alert("status:" + status);
}
