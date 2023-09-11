import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AchievementDetailsPage } from './achievement-details.page';

describe('AchievementDetailsPage', () => {
  let component: AchievementDetailsPage;
  let fixture: ComponentFixture<AchievementDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AchievementDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
