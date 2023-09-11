import { Injectable } from '@angular/core';
import { Achievement } from './achievement.model';
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDocs, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  private achievements: Achievement[] = [];

  private achievementsRef: CollectionReference<DocumentData>;

  constructor(private fireStore: Firestore) {
    this.achievementsRef = collection(this.fireStore, 'achievements');
    this.getAchievements();
  }

  async getAchievements(): Promise<void> {
    const achievementDocs = await getDocs(this.achievementsRef);
    achievementDocs.forEach((achievementDoc) => {
      this.achievements.push({...achievementDoc.data(), id: achievementDoc.id} as Achievement);
    });

    if (this.achievements.length > 1) {
      this.achievements.sort((achi_1, achi_2) => achi_1.moduleName!.localeCompare(achi_2.moduleName!))
    }
  }

  public getAll(): Promise<Achievement[]> {
    return Promise.resolve(this.achievements);
  }

  public getByID(id: string): Promise<Achievement|undefined> {
    return Promise.resolve(this.achievements.find(a => a.id == id));
  }

  //create
  public post(achievement: Achievement): Promise<DocumentData> {
    this.achievements.push(achievement);
    return addDoc(this.achievementsRef, {
      moduleCode: achievement.moduleCode,
      moduleName: achievement.moduleName,
      moduleCrp: achievement.moduleCrp,
      grade: achievement.grade,
      halfWeighted: achievement.halfWeighted,
      summerSem: achievement.summerSem,
      year: achievement.year,
    });
  }

  //update
  public put(achievement: Achievement): Promise<void> {
    const index = this.achievements.findIndex(a => a.id === achievement.id);
    if (index > -1) {
      this.achievements[index] = achievement;

      
    }
    const achievementRef = doc(this.achievementsRef, achievement.id!);
      return updateDoc(achievementRef, {
        moduleCode: achievement.moduleCode,
        moduleName: achievement.moduleName,
        moduleCrp: achievement.moduleCrp,
        grade: achievement.grade,
        halfWeighted: achievement.halfWeighted,
        summerSem: achievement.summerSem,
        year: achievement.year,
      });
  }

  public delete(id: string): Promise<void> {
    const index = this.achievements.findIndex(a => a.id = id);
    if (index > -1) {
      this.achievements.splice(index);
    }

    const achievementRef = doc(this.achievementsRef, id);
    return deleteDoc(achievementRef);
  }
}
