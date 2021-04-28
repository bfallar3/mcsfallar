import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@MCSFALLAR';

  goToktok() {
    window.location.href = "http://www.toktok.ph/delivery/1111318880";
  }

  goMangBoks() {
    window.location.href = "http://www.mangboks.ph/1111318880";
  }

  goBoyBondat() {
    window.location.href = "http://www.boybondat.ph/ordernow/1111318880";
  }

  goSiomaiKing() {
    window.location.href = "http://www.siomaiking.ph/ordernow/1111318880";
  }

  goCoppermask() {
    window.location.href = "http://www.coppermask.ph/cpshop/1111318880";
  }

  goNinjaion() {
    window.location.href = "http://www.ninjaph.com/cpshop/1111318880";
  }

  goShopForMe() {
    window.location.href = "https://toktok.ph/pabiliservice/1111318880";
  }

  goJcShop() {
    window.location.href = "https://jcshop.ph/1111318880";
  }
}
