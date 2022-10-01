interface Reportable {
  summary(): string;
}
const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `name : ${this.name}`;
  },
};
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `drink ${this.summary}`;
  },
};
const printSummary = (item: Reportable): void => {
  console.log(`${item.summary}`);
};

printSummary(oldCivic);
printSummary(drink);
export default Reportable;
