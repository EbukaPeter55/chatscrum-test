import { async, TestBed } from '@angular/core/testing';
import { TeamtaskcardsComponent } from './teamtaskcards.component';
describe('TeamtaskcardsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TeamtaskcardsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TeamtaskcardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=teamtaskcards.component.spec.js.map