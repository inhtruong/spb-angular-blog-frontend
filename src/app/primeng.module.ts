import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { DropdownModule } from "primeng/dropdown";
import { IconFieldModule } from "primeng/iconfield";
import { InputIconModule } from "primeng/inputicon";
import { InputTextModule } from "primeng/inputtext";
import { DialogModule } from "primeng/dialog";
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';


@NgModule({
    declarations: [],
    exports: [
        ButtonModule,
        SidebarModule,
        TableModule,
        DropdownModule,
        IconFieldModule,
        InputIconModule,
        InputTextModule,
        DialogModule,
        SelectButtonModule,
        ToastModule
    ]
})
export class PrimengModule { }