import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AuthenticateComponent } from "./authenticate/authenticate.component";


@NgModule({
    declarations: [AuthenticateComponent],
    imports: [FormsModule, RouterModule.forChild([{ path: '', component: AuthenticateComponent }]), SharedModule]
})
export class AuthModule {}