import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  imports: [LandingRoutingModule, CommonModule, NzTableModule, NzGridModule, NzTypographyModule, NzInputModule, NzButtonModule, NzAvatarModule],
  declarations: [LandingComponent],
  exports: [LandingComponent]
})
export class LandingModule { }
