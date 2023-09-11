import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
    private achievementService: AchievementService
  ) {
    this.getAll();
  }

  public navigateToCreateView(): void {
    this.router.navigate(['achievement-details']);
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
