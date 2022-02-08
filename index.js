const inquirer = require('inquirer')
const calculo = require('./operacoes.js')

inquirer.prompt([
    {
        name: "num1",
        message: "Olá! Digite o primeiro número: "
    },
    {
        name: "operacao",
        message: "Certo! Digite uma operação: + | - | * | / "
    },
    {
        name: "num2",
        message: "Por último, digite o segundo número: "
    }
]).then(answers => {
    const num1 = parseFloat(answers.num1)
    const num2 = parseFloat(answers.num2)
    let operacao = answers.operacao

    switch (operacao) {
        case '+':
            calculo.adicao (num1, num2)
        break
        case '-':
            calculo.subtracao (num1, num2)
        break
        case '*':
            calculo.multiplicacao (num1, num2)
        break
        case '/':
            calculo.divisao (num1, num2)
        break
    }
}).catch((err) => console.log(err))
