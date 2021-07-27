
let apel = document.getElementById("apel")
let anggur = document.getElementById("anggur")
let jeruk = document.getElementById("jeruk")



apel.addEventListener("click", pilih.bind(this,"apel"))
anggur.addEventListener("click", pilih.bind(this,"anggur"))
jeruk.addEventListener("click", pilih.bind(this,"jeruk"))

function pilih(buah){
        if(buah == "apel"){
            alert("sudah dibeli apel")
        } else if (buah == "anggur"){
            alert("sudah dibeli anggur")
        } else if (buah == "jeruk"){
            alert("sudah dibeli jeruk")
        }
}