function onStartAck(epoch) {
  alert("received acknowledgment from the server~ [onStart event] => " + epoch);
}

async function changeStatus(status) {
  document.getElementById("loading").style.opacity = "1";

  await onModeChange(status);

  // setTimeout(() => {
  //   document.getElementById("loading").style.opacity = "0";
  // }, 2000);

  // alert("status:" + status);
}

function onSuccess() {
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
  }, 1500);
}

function onError() {
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
      .alert("Error happened " + status);
  }, 1500);
}

function goBack() {
  location.href = "../index.html";
}
