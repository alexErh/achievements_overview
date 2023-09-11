import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchievementListPageRoutingModule } from './achievement-list-routing.module';

import { AchievementListPage } from './achievement-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchievementListPageRoutingModule
  ],
  declarations: [AchievementListPage]
})
export class AchievementListPageModule {}
