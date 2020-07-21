function SendWAMessage() {
  var xNama = document.getElementById("yournama").value;
  var xHape = document.getElementById("yourhape").value;
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
    "Hallo Fivefy Girlshop, Nama saya " +
    xNama +
    " - " +
    "No. HP : " +
    xHape.split(" ").join("%20") +
     " | " +
    "Alamat : " +
    xJalan.split(" ").join("%20") +
    " | " +
    "RT : " +
    xRT.split(" ").join("%20") +
    " | " +
    "RW : " +
    xRW.split(" ").join("%20") +
    " | " +
    "Kelurahan : " +
    xKel.split(" ").join("%20") +
      " | " +
    "Kecamatan : " +
    xKec.split(" ").join("%20") +
      " | " +
    "Kabupaten/Kota : " +
    xKab.split(" ").join("%20") +
    " | " +
    "Kode Pos : " +
    xKodepos.split(" ").join("%20");

  var linkWhatsapp =
    "https://api.whatsapp.com/send?phone=" +
    yourNumber +
    "&text=%20" +
    yourMessage;

  link.setAttribute("href", linkWhatsapp);

  return false;
}

function validateForm() {
  var fNama = document.forms["myForm"]["yournama"].value;
  var fHape = document.forms["myForm"]["yourhape"].value;
  var fJalan = document.forms["myForm"]["yourjalan"].value;
  var fRT = document.forms["myForm"]["yourrt"].value;
  var fRW = document.forms["myForm"]["yourrw"].value;
  var fKel = document.forms["myForm"]["yourkel"].value;
  var fKec = document.forms["myForm"]["yourkec"].value;
  var fKab = document.forms["myForm"]["yourkab"].value;
  var fKodepos = document.forms["myForm"]["yourkodepos"].value;

  if (fNama == "") {
      alert("Nama anda belum diisi");
      return false;
  } else if (fHape == "") {
      alert("No. Hape belum diisi");
      return false;
  } else if (fJalan == "") {
      alert("Alamat Jalan belum diisi");
      return false;
  } else if (fRT == "") {
      alert("RT belum diisi");
      return false;
  } else if (fRW == "") {
      alert("RW belum diisi");
      return false;
  } else if (fKel == "") {
      alert("Kelurahan belum diisi");
      return false;
  } else if (fKec == "") {
      alert("Kecamatan belum diisi");
      return false;
  } else if (fKab == "") {
      alert("Kabupaten/Kota belum diisi");
      return false;
  } else if (fKodepos == "") {
      alert("Kode Pos belum diisi");
      return false;
  }
}
