 
    
    //  abrfen des textanzeigeelements

    const displayElement = document.getElementById('displayText');



    // Objekte,die sich auf das anzeigen und Ausführen von vorgängen beziehen

    const calculateData= {
        PreviousOperand: '',
        CurrentOperand: '',
        OutputText:'',
        Operator: undefined

    };


    
    //   nummernanzeige aktualisieren

    function updateDisplay(){
        displayElement.innerText = calculateData.OutputText;
        // showCalcData();
    }
    


    //   nummernanzeige aktualisieren

    function clearText(){
        calculateData.PreviousOperand = '';
        calculateData.CurrentOperand = '';    
        calculateData.Operator = undefined;
        calculateData.OutputText = '';
            
        updateDisplay();
    }



    //  löschen das letzte zeichen

    function backspaceText(){
        debugger
        calculateData.OutputText = calculateData.OutputText.substring(0, calculateData.OutputText.length-1);
        updateDisplay();
    }


    
    //  fügen die nummerhinzu

    function setNumber(el){
        debugger
        calculateData.OutputText+=el.innerText;
        // showCalcData();
        updateDisplay();
    }


    
    //  operationen durchführen

    function doOperation(el)
    {
        debugger
        if(calculateData.PreviousOperand === '')
        {
            calculateData.PreviousOperand = calculateData.OutputText;                
        }
        else if(calculateData.CurrentOperand === ''){
            calculateData.CurrentOperand = calculateData.OutputText;
        }



        //   zusatz

        compute();
        calculateData.Operator = el.getAttribute('data-val');
        calculateData.OutputText = '';
    }
    


    //  punkt hinzufügen

    function setDecimal()
    {
        if(calculateData.OutputText.includes('.')) return;
        if(calculateData.OutputText ==='') 
        calculateData.OutputText ='0.';
        else
        calculateData.OutputText+='.';
    
        updateDisplay();
    }


    
    // gleiches Handeln berechnen und ausführen

    function equal(){
        calculateData.CurrentOperand = calculateData.OutputText;
        compute();
        calculateData.Operator = undefined;
    }


    
    //  Zahlen berechnen

    function compute()
    {
        if(calculateData.Operator === undefined
        || calculateData.CurrentOperand ===''
        || calculateData.PreviousOperand ==='') return;
        
        debugger
        let value='';
        
        let currentNumber = parseFloat(calculateData.CurrentOperand);
        let previousNumber = parseFloat(calculateData.PreviousOperand);
        switch (calculateData.Operator) {
            case '+':
                value=currentNumber+previousNumber;
                break;        
            case '-':
                value=previousNumber-currentNumber;
                break;
                case '/':
                value=previousNumber/currentNumber;
                break;        
            case '*':
                value=currentNumber*previousNumber;
                break;
            default:
                break;
        }
        calculateData.PreviousOperand = value.toString();
        calculateData.CurrentOperand ='';
        calculateData.OutputText = value.toString();
        updateDisplay();
    }



    function sqrt(){
        if(calculateData.OutputText === "")return;
        let currentNumber = parseFloat(calculateData.OutputText);
        let value = Math.sqrt(currentNumber);
        calculateData.PreviousOperand = value.toString();
        calculateData.CurrentOperand ='';
        calculateData.OutputText = value.toString();
        updateDisplay();
    }
    
    
    function pow(){
    
    if(calculateData.OutputText === "")return;
    let currentNumber = parseFloat(calculateData.OutputText);
    let value = Math.pow(currentNumber,2);
    calculateData.PreviousOperand = value.toString();
    calculateData.CurrentOperand ='';
    calculateData.OutputText = value.toString();
    updateDisplay();
    
    }
    
    function negative(){
        if(calculateData.OutputText === "")return;
        let currentNumber = parseFloat(calculateData.OutputText);
        let value = currentNumber * -1;
        calculateData.OutputText = value.toString();
        updateDisplay();
    }