import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-upload',
  templateUrl: './at-demo-upload.component.html',
  styleUrls: ['./at-demo-upload.component.css']
})
export class AtDemoUploadComponent implements OnInit {

  constructor() {
  }

  basic = require('!!raw-loader!./at-demo-upload-basic/at-demo-upload-basic.component.html');

  ngOnInit() {
  }

}
