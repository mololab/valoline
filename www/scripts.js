function onStartAck(epoch) {
  alert("received acknowledgment from the server~ [onStart event] => " + epoch);
}

function changeStatus(status) {
  document.getElementById("loading").style.opacity = "1";

  setTimeout(() => {
    document.getElementById("loading").style.opacity = "0";

    siiimpleToast
      .setOptions({
        container: "body",
        class: "siiimpleToast",
        position: "bottom|center",
        margin: 15,
        delay: 0,
        duration: 3000,
        style: {},
      })
      .success("Success " + status);

    siiimpleToast
      .setOptions({
        container: "body",
        class: "siiimpleToast",
        position: "bottom|center",
        margin: 15,
        delay: 0,
        duration: 3000,
        style: {},
      })
      .alert("Error happened " + status);
  }, 2 * 1000);

  // alert("status:" + status);
}

function goBack() {
  window.history.back();
}
