let listaAnimais = [
    {
        idAnimal: 1,
        nome: "Barão",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dinisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempornisi id lacinia lobortis. Donec in justo mauris. Mauris luctus",
        img:"./img/img1.webp"
    },
    {
        idAnimal: 2,
        nome: "Barão",
        descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dinisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempornisi id lacinia lobortis. Donec in justo mauris. Mauris luctus",
            img:"./img/img2.jpg"
        },
    {
        idAnimal: 3,
        nome: "Barão",
        descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dinisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempornisi id lacinia lobortis. Donec in justo mauris. Mauris luctus",
            img:"./img/img3.webp"
        },
    {
        idAnimal: 4,
        nome: "Barão",
        descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dinisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempornisi id lacinia lobortis. Donec in justo mauris. Mauris luctus",
            img:"./img/img4.jpg"
        },

    {
        idAnimal: 5,
        nome: "Barão",
        descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dinisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempornisi id lacinia lobortis. Donec in justo mauris. Mauris luctus",
            img:"./img/img5.webp"
    },
];
let container = document.querySelector(".container");

const criarCards = () => {
    let container = document.querySelector(".container");

    listaAnimais.forEach((elemento) => {
        let card = 
        `
        <div class="card">
        <img class="card-img" src="${elemento.img}"/>
        <h2 class="card-titulo">${elemento.nome}</h2>
        <p class="card-descricao">${elemento.descricao} </p>
        <a class="card-botao" idAnimal="1"> ${elemento.idAnimal} ADOTAR </a>
       </div>
       `
            ;
        container.innerHTML += card;
    });
};
criarCards();