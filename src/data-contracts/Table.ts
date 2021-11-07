import { v4 as uuid } from 'uuid';

class Table {
  public id: any;
  public shoppingList: any;
  public dinnerDate: any;
  public dinnerTime: any;
  public dressCode: any;
  public dinnerType: any;
  public tableSize: any;
  public meetUpLink: any;
  public firstName: any;

  constructor(
    shoppingList,
    dinnerDate,
    dinnerTime,
    dressCode,
    dinnerType,
    tableSize,
    meetUpLink,
    firstName,
  ) {
    this.id = uuid();
    this.shoppingList = shoppingList;
    this.dinnerDate = dinnerDate;
    this.dinnerTime = dinnerTime;
    this.dressCode = dressCode;
    this.dinnerType = dinnerType;
    this.tableSize = tableSize;
    this.meetUpLink = meetUpLink;
    this.firstName = firstName;
  }

  toString() {
    return `${this.dinnerDate}\n${this.dinnerTime}\n${this.dressCode}\n${this.dinnerType}\n${this.tableSize}\n${this.meetUpLink}\n${this.firstName}`;
  }
}

// Firestore data converter
export const tableConverter = {
  toFirestore(table) {
    return {
      id: table.id,
      shoppingList: table.shoppingList,
      dinnerDate: table.dinnerDate,
      dinnerTime: table.dinnerTime,
      dressCode: table.dressCode,
      dinnerType: table.dinnerType,
      tableSize: table.tableSize,
      meetUpLink: table.meetUpLink,
      firstName: table.firstName,
    };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return new Table(
      data.shoppingList,
      data.dinnerDate,
      data.dinnerTime,
      data.dressCode,
      data.dinnerType,
      data.tableSize,
      data.meetUpLink,
      data.firstName,
    );
  },
};

export default Table;
