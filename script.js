const printButton = document.querySelector('.print-button');
const expandableDetails = document.querySelectorAll('details');
const detailsBeforePrint = new Map();

function expandDetailsForPrint() {
  expandableDetails.forEach((details) => {
    if (!detailsBeforePrint.has(details)) {
      detailsBeforePrint.set(details, details.open);
    }
    details.open = true;
  });
}

function restoreDetailsAfterPrint() {
  detailsBeforePrint.forEach((wasOpen, details) => {
    details.open = wasOpen;
  });
  detailsBeforePrint.clear();
}

printButton.addEventListener('click', () => window.print());
window.addEventListener('beforeprint', expandDetailsForPrint);
window.addEventListener('afterprint', restoreDetailsAfterPrint);
