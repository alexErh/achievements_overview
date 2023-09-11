import { Module } from "../module/module.model";

export class Achievement {
    public id: string | null;
    //public user: string;
    //public module: Module;
    public moduleCode: string | null;
    public moduleName: string | null;
    public moduleCrp: number | null;
    public wp: boolean | null;
    public grade: number | null;
    public halfWeighted: boolean | null;
    public summerSem: boolean | null;
    public year: number | null;

    constructor(
        id: string | null = null,
        //user: string,
        //module: Module,
        moduleCode: string | null = null,
        moduleName: string | null = null,
        moduleCrp: number | null = null,
        wp: boolean | null = null,
        grade: number | null = null,
        halfWeighted: boolean | null = null,
        summerSem: boolean | null = null,
        year: number | null = null
        ) {
            this.id = id;
            //this.user = user;
            //this.module = module;
            this.moduleCode = moduleCode;
            this.moduleName = moduleName;
            this.moduleCrp = moduleCrp;
            this.wp = wp;
            this.grade = grade;
            this.halfWeighted = halfWeighted;
            this.summerSem = summerSem;
            this.year = year; 
        }
    
    public toString(): string {
        return this.id /* + ' - ' + this.user */ + '\n' +
        this.moduleName + ' - ' + this.moduleCode + ' - ' + this.moduleCrp + '\n' +
        this.grade + ' - ' + this.halfWeighted + ' - ' + this.summerSem + ' - ' + this.year + '\n';
    }
}
