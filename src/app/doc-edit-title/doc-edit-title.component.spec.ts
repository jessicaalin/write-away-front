import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocEditTitleComponent } from './doc-edit-title.component';

describe('DocEditTitleComponent', () => {
  let component: DocEditTitleComponent;
  let fixture: ComponentFixture<DocEditTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocEditTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocEditTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
