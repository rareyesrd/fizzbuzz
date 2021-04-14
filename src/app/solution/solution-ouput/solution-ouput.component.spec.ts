import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionOuputComponent } from './solution-ouput.component';

describe('SolutionOuputComponent', () => {
  let component: SolutionOuputComponent;
  let fixture: ComponentFixture<SolutionOuputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionOuputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionOuputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
