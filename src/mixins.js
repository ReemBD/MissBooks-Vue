export function bookPriceIcon() {
    const { currencyCode } = this.book.saleInfo.price;
    let icon;
    switch (currencyCode) {
        case "EUR":
            icon = "mdiCurrencyEur";
            break;
        case "ILS":
            icon = "mdiCurrencyIls";
            break;
        case "USD":
            icon = "mdiCurrencyUsd";
            break;
    }
    return require("@mdi/js")[icon];
}
export function price() {
    return this.book.saleInfo.price.amount;
}