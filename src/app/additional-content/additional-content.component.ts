import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user/user.service';

@Component({
  selector: 'app-additional-content',
  templateUrl: './additional-content.component.html',
  styleUrls: ['./additional-content.component.css']
})
export class AdditionalContentComponent implements OnInit {

  constructor(private userService: UserService) { }
  data: string[];

  ngOnInit() {
    this.userService.getData().subscribe(data => this.data = data);
  }

}
