export class Callback{
    public status: number;
    public entity;
    constructor(status: number, entity: object = {}) {
        this.status =  status
        this.entity = entity
    }
}
