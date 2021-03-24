import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercollComponent } from './ajoutercoll.component';

describe('AjoutercollComponent', () => {
  let component: AjoutercollComponent;
  let fixture: ComponentFixture<AjoutercollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutercollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutercollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
