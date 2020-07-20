  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      return;
    }
    navigator.clipboard.writeText(text).then(
       function() {
            alert("Copy Email Sukses");
          },
          function(err) {
            alert("Copy Email Gagal: ", err);
       }
    );
  }
  
  var copyEmailnya = document.querySelector(".js-copy-email")
  
  copyEmailnya.addEventListener("click", function(event) {
    copyTextToClipboard("noardiag@gmail.com");
  });
