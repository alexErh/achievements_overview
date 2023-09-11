import { Component } from '@angular/core';
import { AchievementService } from '../achievement.service';
import { Achievement } from '../achievement.model';

@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.page.html',
  styleUrls: ['./achievement-list.page.scss'],
})
export class AchievementListPage{

  public achievements: Achievement[] = [];

  constructor(
    private achievementService: AchievementService
  ) {
    this.getAll();
  }

  public refresh(event: any) {
    setTimeout(() => {
      this.getAll();
      event.target.complete();
    }, 2000);
  }
  
  public async getAll() {
    this.achievementService.getAll().then((res) => {
      this.achievements = res;
    });
  }


}
