import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service'

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor(public _auth: AuthService) { }

  ngOnInit(): void {
  }

}
