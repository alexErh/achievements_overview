import { Module } from "../module/module.model";

export class Achievement {
    public module: Module;
    public grade: number;
    public halfWeighted: boolean;
    public summerSem: boolean;
    public year: number;

    constructor(
        module: Module,
        grade: number,
        halfWeighted: boolean,
        summerSem: boolean,
        year: number
        ) {
            this.module = module;
            this.grade = grade;
            this.halfWeighted = halfWeighted;
            this.summerSem = summerSem;
            this.year = year; 
        }
}
