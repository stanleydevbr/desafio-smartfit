import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FormsComponent } from "./components/forms/forms.component";
import { UnidadesComponent } from "./components/unidades/unidades.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, FormsComponent, UnidadesComponent]
})
export class AppComponent {
  title = 'smartfit';
}
