function submitted(){                                                     
    var nama=document.getElementById("inputName").value;
    var email=document.getElementById("inputEmail").value;
    var pesan=document.getElementById("pesan").value;

    if (nama == "" || email == "" || pesan == ""){
        swal({
            title: "Pesan Gagal Terkirim!",                             
            text: "Tidak boleh ada form yang kosong",
            icon: "error",
          });
    } else {
        swal({
            title: "Pesan Berhasil Terkirim!",
            text: "Nama :" + nama + "\nEmail :" + email + "\nPesan :\n" + pesan,
            icon: "success",
          });
    }
}

let buttonSubmit = document.getElementById("btn");
buttonSubmit.addEventListener("click", submitted)