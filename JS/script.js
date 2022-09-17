$(document).ready(function () {
    //Ao carregar a tela, exibe o h1 com efeito blind de 01 segundo;
    $("h1").show("blind", 1000);

    //Ao clicar no ícone do menu, precisa exibir os itens de forma centralizada;
    $("#menu").click(function () {
        $(".menuToggle a").removeClass("w3-bar-item");
        $(".menuToggle").toggle(850);
    });

    //Criar um evento que ao clicar na seção about ou team:
    //A) Alterna a classe spinUp;
    //B) Exibe o texto do about com slideToggle;
    //C) Exibe o texto do team com Toggle "slow".
    $("#aboutToggle").click(function () {
        $(this).toggleClass("spinDown spinUp");
        $("#aboutText").slideToggle("slow");
    });
    $("#teamToggle").click(function () {
        $(this).toggleClass("spinDown spinUp");
        $("#teamList").toggle("slow");
    });

    //Criar uma listagem das casas de forma dinâmica;
    var listings = $("#listings");
    $.each(listaCasas, function (indice, valor) {
        listings.append(
            `<div class="w3-col l3 m6 w3-margin-bottom">
                <div class="w3-display-container">
                    <div class="w3-display-topleft bg-black w3-padding">${valor.nome}</div>
                    <img id="${indice}" src="${valor.src}" class="houseThumbnail" alt="House">
                </div>
            </div>`
        );
    });

    //Quando o mouse for passado em um dos containers das casas:
    //A) Mudar a cor do background para branco;
    //B) Mudar o texto para preto;
    //C) Quando o mouse sair, voltar para as cores originais.
    $(listings).on("mouseenter", ".w3-display-container", function () {
        $(this.children[0]).css({ backgroundColor: "white", color: "black" });
    });
    $(listings).on("mouseleave", ".w3-display-container", function () {
        $(this.children[0]).css({ backgroundColor: "black", color: "white" });
    });

    //Quando clicar na imagem de uma casa:
    //A) Abrir o modal e mostrar a imagem da casa dentro dele;
    //B) Fechar o modal quando for clicado em qualquer lugar dele.
    $(listings).on("click", ".w3-display-container", function () {
        $("#modalImages").show("slow");
        $("#imageModal").attr("src", this.children[1].src);
    });
    $("#modalImages").click(function () {
        $(this).hide("slow");
    });

    //Ao enviar o formulário:
    //A) Evitar que ocorra o post;
    //B) Ocultar o form;
    //C) Exibir o texto de mensagem enviada.
    $("form").submit(function (e) {
        e.preventDefault();
        $(this).slideUp("slow");
        $("#msg-contact").text("Thank you for your submission, we will contact you as soon as possible.");
        $("#msgSent").slideDown(1500);
        $("input").val("");
    });
});