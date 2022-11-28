const form = document.querySelector('.form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputPeso = e.target.querySelector('.peso');
        const inputAltura = e.target.querySelector('.altura');
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        
        const imc = getIMC(peso,altura);
        const lvIMC = lvObesity(imc);
        const msg = `Seu IMC é: ${imc} (${lvIMC})`

        if(!peso || !altura) {
            setResult('Peso ou Altura Inválido', false);
            return;
        }

        setResult(msg, true);
        
        }
    );
    function addP () {
        const p = document.createElement('p');
        return p;
    };
    function setResult (msg, isValid) {
        const result = document.querySelector('#result');
        result.innerHTML = '';
        const p = addP();

        isValid === true ? p.classList.add('paragraph-result') : p.classList.add('bad'); 

        p.innerHTML = msg;
        result.appendChild(p);
    };
    function getIMC (peso, altura) {
        let IMC = peso / (altura * altura);
        return IMC.toFixed(1);
    };
    function lvObesity(imc) {
        const txtIMC = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

        if(imc < 18.5) return txtIMC[0];
        if(imc < 24.9) return txtIMC[1];
        if(imc < 29.9) return txtIMC[2];
        if(imc < 34.9) return txtIMC[3];
        if(imc < 39.9) return txtIMC[4];
        if(imc > 40) return txtIMC[5];
    }


