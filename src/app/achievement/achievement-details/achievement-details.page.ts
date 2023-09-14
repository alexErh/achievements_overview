import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Achievement } from '../achievement.model';
import { AchievementService } from '../achievement.service';

@Component({
  selector: 'app-achievement-details',
  templateUrl: './achievement-details.page.html',
  styleUrls: ['./achievement-details.page.scss'],
})
export class AchievementDetailsPage implements OnInit {

  public years: number[] = [];
  public achievement: Achievement = new Achievement();

  constructor(
    private achievementService: AchievementService,
    private alertController: AlertController,
    private navController: NavController,
  ) {
    this.getYears();
  }

  ngOnInit() {
  }


  public getYears(): void {
    const cutrentYear: number = new Date().getFullYear();
    for (let index = 5; index >= 0; index--) {
      this.years.push(cutrentYear-index);
    }
  }

  public async checkAndSave() {
    let errMessage: string = "Weitere Angaben sind falsch oder leer: ";
    const initLength: number = errMessage.length;
    errMessage += this.achievement.moduleName !== null && this.achievement.moduleName.length > 0 ? "" : "Modulname, ";
    errMessage += this.achievement.moduleCode !== null && this.achievement.moduleCode.length > 0 ? "" : "Modulcode, ";
    errMessage += this.achievement.moduleCrp !== null && this.achievement.moduleCrp > 0 ? "" : "Anzahl CrP, ";
    errMessage += this.achievement.year !== null ? "" : "Jahr, ";
    errMessage += this.achievement.grade !== null && this.achievement.grade >= 0 && this.achievement.grade <= 100 ? "" : "Punkte, ";
    const actualLength: number = errMessage.length;

    if (actualLength-initLength > 0) {  
      const alert = await this.alertController.create({
        header: 'Fehler',
        message: errMessage,
        buttons: ['OK']
      });
      await alert.present();
    } else {
      this.achievement.halfWeighted = this.achievement.halfWeighted !== true ? false : true;
      this.achievement.summerSem = this.achievement.summerSem !== true ? false : true;
      this.achievementService.post(this.achievement);
      this.navController.pop();
    }
  }

  public async delete(index: number) {
    const alert = await this.alertController.create({
      header: 'Warnung',
      message: 'Wollen Sie wirklich diese Leistung löschen?',
      buttons: [
        {
          text: 'NEIN',
          role: 'cancel'
        },
        {
          text: 'JA',
          handler: () => {
            this.achievementService.delete(index);
            this.navController.pop();
          }
        }
      ]
    });
    await alert.present();
  }
}
