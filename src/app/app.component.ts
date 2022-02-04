import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [` 
    .fontStyle{
      text-align: center;
      background-color: rgb(41, 222, 235);
    }

    .left-menu-container {
      // background-color: blueviolet;
      width: 100%;
      height: 200%;
    }

    .right-menu-container {
      // background-color: blueviolet;
      width: 100%;
      height: 250%;
    }

    .header-container {
      background-color: rgb(126, 34, 110);
      width: 100%;
      height: 80px;
    }

    .view-container {
      min-height: 500px;
    }
  `],
  template: `
  <div>
  <table style="width: 100%;">
    <tr>
      <td colspan="3">
        <div class="header-container">
          <app-header></app-header>
        </div>
      </td>
    </tr>
    <tr> 
      <td style="width:15%; background-color: rgb(126, 34, 110); vertical-align: top;">
        <div class="left-menu-container">
          <app-left-menu></app-left-menu>
        </div>
      </td>
      <td>
        <div class="view-container">
          <router-outlet></router-outlet>
        </div>
      </td>
      <td style="width: 15%; background-color: rgb(126, 34, 110); vertical-align: top;">
        <div class="right-menu-container">
          <app-right-menu></app-right-menu>
        </div>
      </td>
    </tr>
  </table>
</div>
  `,
})
export class AppComponent {
  title = 'angular-demo';
}
