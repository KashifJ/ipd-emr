import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  imports: [LoginRoutingModule, CommonModule, NzButtonModule, NzGridModule, NzInputModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
