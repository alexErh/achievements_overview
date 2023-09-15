import { Injectable } from '@angular/core';
import { CollectionReference, Firestore, DocumentData, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from '@angular/fire/firestore';
import { Module } from './module.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private modulesRef: CollectionReference<DocumentData>;

  public modules: Module[] = [];


  constructor(
    private fireStore: Firestore,
  ) {
    this.modulesRef = collection(this.fireStore, 'modules');
  }

  async getModules(): Promise<void> {
    const moduleDocs = await getDocs(this.modulesRef);
    moduleDocs.forEach((moduleDoc) => {
      this.modules.push({...moduleDoc.data(), id: module.id} as Module);
    });
    this.sortAlphabetically();
  }

  public getAll(): Promise<Module[]> {
    return Promise.resolve(this.modules);
  }

  public getByID(id: string): Promise<Module | undefined> {
    return Promise.resolve(this.modules.find(mod => mod.id === id));
  } 

  //create
  public post(module: Module): Promise<DocumentData> {
    this.modules.push(module);
    this.sortAlphabetically;
    return addDoc(this.modulesRef, {
      code: module.code,
      name: module.name,
      crp: module.crp,
    });
  }

  //update
  public put(module: Module): Promise<void> {
    const index = this.modules.findIndex(m => m.id === module.id);
    if (index > -1) {
      this.modules[index] = module;
      this.sortAlphabetically();
    }

    const moduleRef = doc(this.modulesRef, module.id!);
    return updateDoc(moduleRef, {
      code: module.code,
      name: module.name,
      crp: module.crp,
    });
  }

  public delete(index: number): Promise<void> {
    const id: string = this.modules[index].id!;
    
    this.modules.splice(index, 1);

    const moduleRef = doc(this.modulesRef, id);
    return deleteDoc(moduleRef);
  }

  private sortAlphabetically(): void {
    if (this.modules.length > 1) {
      this.modules = this.modules.sort((mod_1, mod_2) => mod_1.name!.localeCompare(mod_2.name!))
    }
  }  
}
