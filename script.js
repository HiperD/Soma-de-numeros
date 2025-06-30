alert('Seja bem-vindo a soma de numeros!');
let numero = 0
do{
    numero = 0
    numero = numero + parseInt(prompt("Digite o número que deseja somar"));
    do{
        numero = numero + parseInt(prompt("Digite outro numero que deseja somar"));
    }while(confirm("Gostaria de somar mais numeros?"));
    alert(`Soma total resultou em ${numero}`)
}while(confirm("Gostaria de somar mais um conjunto?"))
alert("Até mais :)")