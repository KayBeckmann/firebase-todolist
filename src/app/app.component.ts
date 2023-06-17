import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, doc } from '@angular/fire/firestore';
import { setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string,

};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos$: Observable<any>; // Observable -> Bekommt ein Update bei Änderung
  firestore: Firestore = inject(Firestore);
  userinput:String = '';

  constructor() {
    const todosCollection = collection(this.firestore, 'todos');
    this.todos$ = collectionData(todosCollection);
  }

  addTodo(){
    const todosCollection = collection(this.firestore, `todos`);
    setDoc(doc(todosCollection),{name:this.userinput})
    this.userinput = ''
  }
}
