import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThTableComponent } from './th-table.component';

describe('ThTableComponent', () => {
  let component: ThTableComponent;
  let fixture: ComponentFixture<ThTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
