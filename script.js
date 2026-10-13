function criaCalculadora(){
    return{
        display: document.querySelector(".display"),
        btnClear: document.querySelector(".btnclear"),

        inicia(){
            this.cliqueBotoes();
        },

        realizaConta(){
            let conta = this.display.value;
            try{
                conta = eval(conta);

                if(!conta){
                    alert("conta invalida");
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                alert("conta invalida");
                return;

            }
        },

        clearDisplay(){
            this.display.value = "";
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },




        cliqueBotoes(){
            document.addEventListener("click", function(e){
                const el = e.target;
                console.log(this);

                if(el.classList.contains("btn-num")){
                  this.btnParaDisplay(el.innerText);  

                }
                if(el.classList.contains("btn-clear")){
                    this.clearDisplay();
                }
                if(el.classList.contains("btn-del")){
                    this.apagaUm();
                }
                if(el.classList.contains("btn-igual")){
                    this.realizaConta();
                }

            }.bind(this));//nessa linha estou dizendo para o this volta a se reverenciar para o meu objeto
        
        },


        btnParaDisplay(valor){
            this.display.value += valor;
        }
    }
}



const novaCalculadora = criaCalculadora();
novaCalculadora.inicia();