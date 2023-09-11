import { Module } from "../module/module.model";

export class Achievement {
    public id: string;
    //public user: string;
    //public module: Module;
    public moduleCode: string;
    public moduleName: string;
    public moduleCrp: number;
    public grade: number;
    public halfWeighted: boolean;
    public summerSem: boolean;
    public year: number;

    constructor(
        id: string,
        //user: string,
        //module: Module,
        moduleCode: string,
        moduleName: string,
        moduleCrp: number,
        grade: number,
        halfWeighted: boolean,
        summerSem: boolean,
        year: number
        ) {
            this.id = id;
            //this.user = user;
            //this.module = module;
            this.moduleCode = moduleCode;
            this.moduleName = moduleName;
            this.moduleCrp = moduleCrp;
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
