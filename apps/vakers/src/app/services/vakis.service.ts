import { Injectable } from '@angular/core';
import { Vaki } from '../utils/vaki';
import { db } from '../../firebase-config';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class VakisService {
  private vakiDB: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;

  constructor(  ) {
    this.vakiDB = db.collection('vakis');
  }

  async getVakis() {
    const vakis: Vaki[] = [];

    (await this.vakiDB.get()).forEach(snap => vakis.push({
      $key: snap.id.toString(),
      description: snap.data().description,
      start_date: snap.data().start_date,
      close_date: snap.data().close_date,
      name: snap.data().name,
      goal: snap.data().goal,
      summary: snap.data().summary,
      url: snap.data().url,
      photo: snap.data().photo,
      video: snap.data().video,
      country: snap.data().country
    }));
    return vakis
  }


}
