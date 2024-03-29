var restart;
var derrotas = 0;
var empates = 0;
var vitorias = 0;

function Pedra(){
    document.getElementById("estatisticas").innerHTML = "vitorias (" + vitorias + ") " +"<br>" + "derrotas (" + derrotas + ") " +"<br>"  + "empates (" + empates + ")";
    let pedra = document.getElementById("pedra").value;
    document.getElementById("sua_escolha").innerHTML = "Sua escolha: Pedra";

    let escolhas = ["pedra", "papel", "tesoura"];
         x = Math.floor(Math.random() * escolhas.length);
         texto = escolhas[x];

    if(texto === "pedra"){
        document.getElementById("escolha_do_computador").src = "assets/image/icon_pedra.png";
    }
    else if(texto === "papel"){
        document.getElementById("escolha_do_computador").src = "assets/image/icon_papel.png";
    }
    else if(texto === "tesoura"){
        document.getElementById("escolha_do_computador").src = "assets/image/icon_tesoura.png";
    }

    if(texto == pedra){
        document.getElementById("resultado").innerHTML = "Empate!";
        empates++
    }
    else if(texto === "papel"){
        document.getElementById("resultado").innerHTML = "Você perdeu!";
        derrotas++;
    }
    else if(texto === "tesoura"){
        document.getElementById("resultado").innerHTML = "Você ganhou!";
        vitorias++;
    }


}
const newLocal = "icon_pedra.png";
function Papel(){
    document.getElementById("estatisticas").innerHTML = "vitorias (" + vitorias + ") " +"<br>" + "derrotas (" + derrotas + ") " +"<br>"  + "empates (" + empates + ")";
    let papel = document.getElementById("papel").value;
    document.getElementById("sua_escolha").innerHTML = "Sua escolha: Papel";
    
    let escolhas = ["pedra", "papel", "tesoura"];
         x = Math.floor(Math.random() * escolhas.length);
         texto = escolhas[x];

    if(texto === "pedra"){
        document.getElementById("escolha_do_computador").src = "assets/image/icon_pedra.png";
    }
    else if(texto === "papel"){
        document.getElementById("escolha_do_computador").src = "assets/image/icon_papel.png";
    }
    else if(texto === "tesoura"){
        document.getElementById("escolha_do_computador").src = "assets/image/icon_tesoura.png";
    }

    if(texto == pedra){
        document.getElementById("resultado").innerHTML = "Você ganhou!";
        vitorias++;
    }
    else if(texto === "papel"){
        document.getElementById("resultado").innerHTML = "Empate!";
        empates++
    }
    else if(texto === "tesoura"){
        document.getElementById("resultado").innerHTML = "Você perdeu!";
        derrotas++;
    }
}
function Tesoura(){
    document.getElementById("estatisticas").innerHTML = "vitorias (" + vitorias + ") " +"<br>" + "derrotas (" + derrotas + ") " +"<br>"  + "empates (" + empates + ")";
    let tesoura = document.getElementById("tesoura").value;
    document.getElementById("sua_escolha").innerHTML = " Sua escolha: Tesoura";   
    
    let escolhas = ["pedra", "papel", "tesoura"];
         x = Math.floor(Math.random() * escolhas.length);
         texto = escolhas[x];

    if(texto === "pedra"){
        document.getElementById("escolha_do_computador").src = "assets/image/icon_pedra.png";
    }
    else if(texto === "papel"){
        document.getElementById("escolha_do_computador").src = "assets/image/icon_papel.png";
    }
    else if(texto === "tesoura"){
        document.getElementById("escolha_do_computador").src = "assets/image/icon_tesoura.png";
    }

    if(texto == pedra){
        document.getElementById("resultado").innerHTML = "Você perdeu!";
        derrotas++;
    }
    else if(texto === "papel"){
        document.getElementById("resultado").innerHTML = "Você ganhou!";
        vitorias++;
    }
    else if(texto === "tesoura"){
        document.getElementById("resultado").innerHTML = "Empate!";
        empates++
    }
}
function Restart(){
    vitorias = 0;
    derrotas = 0;
    empates = 0;
    document.getElementById("estatisticas").innerHTML = "vitorias (" + vitorias + ") " +"<br>" + "derrotas (" + derrotas + ") " +"<br>"  + "empates (" + empates + ")";
}
