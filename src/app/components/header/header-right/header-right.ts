import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sih-header-right',
  templateUrl: './header-right.html'
})

export class HeaderRightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  listOfBlockFloors = [
    {
      nzLabel: 'A1',
      nzValue: 'a1',
    },
    {
      nzLabel: 'A2',
      nzValue: 'a2',
    },
    {
      nzLabel: 'A3',
      nzValue: 'a3',
    }
  ];

  listOfWing = [
    {
      nzLabel: 'Left',
      nzValue: 'left',
    },
    {
      nzLabel: 'Right',
      nzValue: 'right',
    }
  ];

  listOfPhysician = [
    {
      nzLabel: 'Dr. 1',
      nzValue: 'dr-1',
    },
    {
      nzLabel: 'Dr. 2',
      nzValue: 'dr-2',
    }
  ];

  settingsMenuItem = 'Settings';
  logoutMenuItem = 'Logout';

}