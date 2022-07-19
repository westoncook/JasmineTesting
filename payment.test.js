describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
        let bill = document.querySelector('#billAmt');
        let tip = document.querySelector('#tipAmt');
        bill.value = 100;
        tip.value = 20;
    });
  
  
    it('should return payment object', function (){
        expect(submitPaymentInfo()).toEqual({
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20
          })
    });


    it('should clear bill and tip inputs', function () {
        submitPaymentInfo();
        expect(document.querySelector('#billAmt').value).toEqual('');
        expect(document.querySelector('#tipAmt').value).toEqual('');
    });


    it('should add to payment table, summary table, and add delete button', function (){
        submitPaymentInfo()
        expect(document.querySelector('#payments > tr > td').innerText).toEqual('$100');
        expect(document.querySelector('#summary-table > tr > td').innerText).toEqual('$100');
        expect(document.querySelector('.delete').innerText).toEqual('X');
    });

    
    afterEach(function() {
        document.querySelector('#payments').innerHTML = '';
        let summaryData = document.querySelectorAll('#summary-table > tr > td');
        for (let td of summaryData){
            td.innerText = '';
        }
    });
  });