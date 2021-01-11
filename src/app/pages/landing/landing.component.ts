import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sih-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  listOfData: any[];

  constructor() {

    this.listOfData = [
      {
        key: '1',
        location: 'G4-0101',
        mews: '1',
        mrno: '74249C',
        ptnname: 'Khalida Reyaz',
        age: '65y 9m',
        admitedon: 'Wed. May 20, 2020 - 10:00 AM',
        los: '1D 15H 20M',
        admtingphy: 'Dr. Shehzad Riyaz',
        constphy: '',
        complaints: 'Malena',
        gender: 'female'
      },
      {
        key: '2',
        location: 'G4-0101',
        mews: '1',
        mrno: '74249C',
        ptnname: 'Khalida Reyaz',
        age: '65y 9m',
        admitedon: 'Wed. May 20, 2020 - 10:00 AM',
        los: '1D 15H 20M',
        admtingphy: 'Dr. Shehzad Riyaz',
        constphy: '',
        complaints: 'Malena',
        gender: 'male'
      },
      {
        key: '3',
        location: 'G4-0101',
        mews: '1',
        mrno: '74249C',
        ptnname: 'Khalida Reyaz',
        age: '65y 9m',
        admitedon: 'Wed. May 20, 2020 - 10:00 AM',
        los: '1D 15H 20M',
        admtingphy: 'Dr. Shehzad Riyaz',
        constphy: '',
        complaints: 'Malena',
        gender: 'female'
      },
      {
        key: '4',
        location: 'G4-0101',
        mews: '1',
        mrno: '74249C',
        ptnname: 'Khalida Reyaz',
        age: '65y 9m',
        admitedon: 'Wed. May 20, 2020 - 10:00 AM',
        los: '1D 15H 20M',
        admtingphy: 'Dr. Shehzad Riyaz',
        constphy: '',
        complaints: 'Malena',
        gender: 'female'
      },
      {
        key: '5',
        location: 'G4-0101',
        mews: '1',
        mrno: '74249C',
        ptnname: 'Khalida Reyaz',
        age: '65y 9m',
        admitedon: 'Wed. May 20, 2020 - 10:00 AM',
        los: '1D 15H 20M',
        admtingphy: 'Dr. Shehzad Riyaz',
        constphy: '',
        complaints: 'Malena',
        gender: 'female'
      }
    ];

  }

  public totalRecords() {
    return this.listOfData.length;
  }

  public totalMale() {
    return this.listOfData.filter(i => i.gender === 'male').length;
  }

  public totalFemale() {
    return this.listOfData.filter(i => i.gender === 'female').length;
  }

  ngOnInit(): void {
  }

}
