function kirim(){
    let username = document.getElementById("inputUsername").value;
    let password = document.getElementById("inputPassword").value;

    if (username == "" || password == ""){
        alert("Mohon lengkapi data diatas")
    } else {
        cek = confirm("Apakah data diatas sudah benar?")
        if (cek == true ){
            alert("Login berhasil")
        } else {
            alert("Silahkan isi data kembali")
        }
    }
}

const tombol = document.getElementById("btn");
tombol.addEventListener("click", kirim)