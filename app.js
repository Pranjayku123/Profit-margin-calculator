function calculateRepayments() {
    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseFloat(document.getElementById('term').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const mortgageType = document.querySelector('input[name="mortgageType"]:checked').value;

    let monthlyRepayments = 0;
    let totalRepayments = 0;

    if (mortgageType === 'repayment') {
        const monthlyRate = rate / 12;
        const numberOfPayments = term * 12;
        monthlyRepayments = amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
        totalRepayments = monthlyRepayments * numberOfPayments;
    } else {
        monthlyRepayments = (amount * rate) / 12;
        totalRepayments = amount + (monthlyRepayments * term * 12);
    }

    document.getElementById('monthlyRepayments').innerText = `£${monthlyRepayments.toFixed(2)}`;
    document.getElementById('totalRepayments').innerText = `£${totalRepayments.toFixed(2)}`;
}
