import { Achievement } from "./achievement.model";

export class StatisticData {

    private achievements: Achievement[] = [];

    public achievementCount: number = 0;
    public hwCount: number = 0;
    public summCrP: number = 0;
    public crpToGet: number = 0;
    public averageGrade: number = 0;

    constructor(achievements: Achievement[]) {
        this.achievements = achievements;
        this.achievementCount = this.achievements.length;
        this.hwCount = this.hwCounter();
        this.summCrP = this.crpAdder();
        this.crpToGet = 180 - this.summCrP;
        this.averageGrade = this.averageGradeCalc();
    }

    private hwCounter(): number {
        return this.achievements ? this.achievements.filter((a) => a.halfWeighted === true).length : 0;
    }

    private crpAdder(): number {
        return this.achievements ? this.achievements.reduce((acc, cur) => acc + (cur.moduleCrp ?? 0), 0) : 0;
    }

    //TODO:
    private averageGradeCalc(): number {

        if (this.achievements.length > 0) {
            const hwGradesSum: number = this.achievements
            .filter((a) => a.halfWeighted === true)
            .reduce((acc, cur) => acc + (cur.grade ?? 0) * (cur.moduleCrp ?? 0) / 2, 0);

            const nonHWGradesSum: number = this.achievements
            .filter((a) => a.halfWeighted === false)
            .reduce((acc, cur) => acc + (cur.grade ?? 0) * (cur.moduleCrp ?? 0), 0);

            const hwCrpSum: number = this.achievements
            .filter((a) => a.halfWeighted === true)
            .reduce((acc, cur) => acc + (cur.moduleCrp ?? 0) / 2, 0);

            const nonHWCrpSum: number = this.achievements
            .filter((a) => a.halfWeighted === false)
            .reduce((acc, cur) => acc + (cur.moduleCrp ?? 0), 0);

            return Math.round((hwGradesSum + nonHWGradesSum) / (hwCrpSum + nonHWCrpSum));

        }
        return 0;
    }
}
