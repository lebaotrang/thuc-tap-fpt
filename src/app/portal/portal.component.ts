import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { PortalService } from './portal.service'

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  profile: any = {}

  constructor(public _auth: AuthService, public _service: PortalService) { }

  ngOnInit(): void {
    this.getProfile()
  }

  getProfile() {
    this._service.getProfile().subscribe( data => {
      console.log(data);
      this.profile = data
    })
  }

}
