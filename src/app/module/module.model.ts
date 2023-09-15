export class Module {
    public id: string | null;
    public code: string | null;
    public name: string | null;
    public crp: number | null;

    constructor(
        id: string | null = null, 
        code: string | null = null, 
        name: string | null = null, 
        crp: number | null = null
    ) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.crp = crp;
    }
}
