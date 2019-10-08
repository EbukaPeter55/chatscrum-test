import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MytaskComponent = class MytaskComponent {
    constructor() { }
    // Initialise Modal function/method
    modalControl() {
        let modalToggle = document.querySelectorAll(".modal_toggle");
        let modal = document.querySelectorAll(".modal");
        let overlay = document.querySelector(".overlay");
        modal.forEach(modal => {
            let toggler = modal.parentElement;
            // Add the click event to modal open icon to open when clicked
            toggler.addEventListener("click", () => {
                modalSwitch.show();
            });
            // modal modes to control the opening and closing
            var modalSwitch = {
                show: () => {
                    overlay.classList.remove("hidden");
                    modal.classList.remove("hidden");
                },
                hide: () => {
                    overlay.classList.add("hidden");
                    modal.classList.add("hidden");
                }
            };
            // Get the icon to close the modal 
            let close = modal.querySelector("#cancel");
            let footerclose = modal.querySelector("#footerclose");
            // Hide modal when user clicks outside the modal or on the close icon
            window.addEventListener('click', function (event) {
                if (event.target === overlay || event.target === close || event.target === footerclose) {
                    modalSwitch.hide();
                }
            });
        });
    }
    ;
    ngOnInit() {
        // Listen to the event from the template
        window.addEventListener("load", this.modalControl);
        // Call the modal function/method
        this.modalControl();
    }
};
MytaskComponent = tslib_1.__decorate([
    Component({
        selector: 'app-mytask',
        templateUrl: './mytask.component.html',
        styleUrls: ['./mytask.component.css']
    })
], MytaskComponent);
export { MytaskComponent };
//# sourceMappingURL=mytask.component.js.map