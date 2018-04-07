export class Item {
	serial_number: number | string;
	inventory_number: number;
	department_number: number;
    qr: string;
    firm: string;
    model: string;
     
    constructor(serial_number: number, inventory_number: number, department_number: number, qr: string, firm: string, model: string) {
        this.serial_number = serial_number;
        this.inventory_number = inventory_number;
        this.department_number = department_number;
        this.qr = qr;
        this.firm = firm;
        this.model = model;
    }
}