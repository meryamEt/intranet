import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercollComponent } from './modifiercoll.component';

describe('ModifiercollComponent', () => {
  let component: ModifiercollComponent;
  let fixture: ComponentFixture<ModifiercollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiercollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiercollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
