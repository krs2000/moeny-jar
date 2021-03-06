import { v4 } from 'node-uuid';

export class Jar {
    id;
    account;
    label;
    currency;
    isDefault;
    constructor(label, currency, isDefault) {
        this.id = v4();
        this.account = 0;
        this.label = label;
        this.currency = currency;
        this.isDefault = isDefault;
    }
}