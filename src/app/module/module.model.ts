export class Module {
    public id: string;
    public code: string;
    public name: string;
    public crp: number;

    constructor(id: string, code: string, name: string, crp: number) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.crp = crp;
    }
}
