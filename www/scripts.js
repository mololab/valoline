let download_link =
  "https://github.com/ParvinEyvazov/valoline/raw/master/Valoline.exe";

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

function copyDownloadLink() {
  copyMessage(download_link);
}

function copyMessage(string) {
  const selBox = document.createElement("textarea");
  selBox.style.position = "fixed";
  selBox.style.left = "0";
  selBox.style.top = "0";
  selBox.style.opacity = "0";
  selBox.value = string;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand("copy");
  document.body.removeChild(selBox);
  this.copyMessageGuarantee(string);
}
