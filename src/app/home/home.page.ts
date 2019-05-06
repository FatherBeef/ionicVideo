import { Component } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { DataService } from '../data.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  constructor(private file: File) { }	text = 'default text';
  onChangeText() {
    this.text = 'New Text!';
    console.log(this.file.checkDir(this.file.dataDirectory, 'mydir'));
  }
}
