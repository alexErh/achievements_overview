import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
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
    private router: Router
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
      this.achievementService.post(this.achievement);
      this.router.navigate(['achievement-list']);
    }
  }
}
