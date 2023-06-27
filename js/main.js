const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment-period"]');
const elsPrisingPlanValue = document.querySelectorAll('.prising-plan-value')

elsPaymentPeriodRadio.forEach(function (elPaymentPeriodRadio) {
  elPaymentPeriodRadio.addEventListener('change', function ()
  {
    period = elPaymentPeriodRadio.value;

    if (period === 'annual') {
      elsPrisingPlanValue.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest('.prising-plan').dataset.paymentAnnual;
      });
    }
    else {
      elsPrisingPlanValue.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest('.prising-plan').dataset.paymentMonthly;
      });
    }
  });
})