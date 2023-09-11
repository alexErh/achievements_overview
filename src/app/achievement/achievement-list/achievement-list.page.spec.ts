import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AchievementListPage } from './achievement-list.page';

describe('AchievementListPage', () => {
  let component: AchievementListPage;
  let fixture: ComponentFixture<AchievementListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AchievementListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
