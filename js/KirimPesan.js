function SendWAMessage() {
  var xNama = document.getElementById("yournama").value;
  var xJalan = document.getElementById("yourjalan").value;
  var xRT = document.getElementById("yourrt").value;
  var xRW = document.getElementById("yourrw").value;
  var xKel = document.getElementById("yourkel").value;
  var xKec = document.getElementById("yourkec").value;
  var xKab = document.getElementById("yourkab").value;
  var xKodepos = document.getElementById("yourkodepos").value;
  var link = document.getElementById("mylink");
  var yourNumber = "6288220063867";
  var yourMessage =
    "Hallo, Nama saya " +
    xNama +
    ", " +
    xJalan.split(" ").join("%20") +
    "</br>" +
    xRT.split(" ").join("%20");

  var linkWhatsapp =
    "https://api.whatsapp.com/send?phone=" +
    yourNumber +
    "&text=%20" +
    yourMessage;

  link.setAttribute("href", linkWhatsapp);

  return false;
}
