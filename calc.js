  var op1=0;
  var op2=0;
  var op=0;

  function setNumber(arg1){
  document.getElementById('display').value+=arg1;
  }

  function setDecimal(){
    document.getElementById('display').value+='.';
  }
  function clearr(){
    document.getElementById('display').value='';
  }

  function setoperator(arg){
    op1=parseFloat(document.getElementById('display').value);
    clearr();
    op=arg;
  }
  function clearall() {
    op1=0;
    op2=0;
    op=0;
    clearr();
  }

  function equalto(){
    op2=parseFloat(document.getElementById('display').value)
    clearr();
    switch (op) {
      case '+':
      var orignal=op1+op2;
      document.getElementById('display').value=(Math.round(orignal * 1000) / 1000).toFixed(2);

        break;

        case '-':
        var orignal1=op1-op2;
        document.getElementById('display').value=(Math.round(orignal1 * 1000) / 1000).toFixed(2);
        break;

        case '*':
        var orignal2=op1*op2;
        document.getElementById('display').value=(Math.round(orignal2 * 1000) / 1000).toFixed(2);
        break;

        case '/':
        var orignal3=op1/op2;
        document.getElementById('display').value=(Math.round(orignal3 * 1000) / 1000).toFixed(2);
          break;
    }

  }