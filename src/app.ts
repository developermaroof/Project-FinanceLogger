import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("Maroof", "Work on a website", 400);
const invTwo = new Invoice("Developer", "Work on a website", 500);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format);
});

// inputs
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLSelectElement;
const amount = document.querySelector("#amount") as HTMLSelectElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.value);
});
