import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherechercollComponent } from './recherechercoll.component';

describe('RecherechercollComponent', () => {
  let component: RecherechercollComponent;
  let fixture: ComponentFixture<RecherechercollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecherechercollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherechercollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
