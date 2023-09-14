import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AchievementService } from '../achievement.service';
import { Achievement } from '../achievement.model';
import { StatisticData } from '../statistic-data.model';

@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.page.html',
  styleUrls: ['./achievement-list.page.scss'],
})
export class AchievementListPage{

  public achievements: Achievement[] = [];
  public stats: StatisticData = new StatisticData(this.achievements);

  constructor(
    private router: Router,
    private achievementService: AchievementService,
    private alertController: AlertController
  ) {
    this.achievementService.getAchievements().then(() => this.getAll());
  }

  ionViewWillEnter() {
    this.getAll()
  }

  public navigateToCreateView(): void {
    this.router.navigate(['achievement-details']);
  }

  public refresh(event: any): void {
    setTimeout(() => {
      this.getAll();
      event.target.complete();
    }, 2000);
  }
  
  public async getAll() {
    this.achievementService.getAll().then((res) => {
      this.achievements = res;
      this.stats = new StatisticData(res);
    });
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
            this.getAll();
          }
        }
      ]
    });
    await alert.present();
  }

  public async schowStats(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Statistik',
      message: `
        <p>Zusammenfassung zu den <b>${this.stats.achievementCount}</b> erbrachten Leistungen: </p>
        <ul>
          <li>50%-Leistungen: <b>${this.stats.hwCount}</b></li>
          <li>Gesammelte CrPs: <b>${this.stats.summCrP}</b></li>
          <li>CrPs bis 180 CrPs: <b>${this.stats.crpToGet}</b></li>
          <li>Gesamtnote: <b>${this.stats.averageGrade}%</b></li>
        </ul>
      `,
      buttons: ['OK']
    });
    await alert.present();
  }

}
