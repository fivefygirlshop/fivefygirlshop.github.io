function SendWAMessage() {
    var xNama = document.getElementById("yournama").value;
    var xPesan = document.getElementById("yourpesan").value;
    var link = document.getElementById("mylink");
    var yourNumber = "6288220063867";
    var yourMessage = 'Hallo, Nama saya ' + xNama + '\n' + xPesan.split('-').join('%20');

    var linkWhatsapp = 'https://api.whatsapp.com/send?phone=' + yourNumber + '&text=%20' + yourMessage;

    link.setAttribute('href', linkWhatsapp);
    
    return false
}
