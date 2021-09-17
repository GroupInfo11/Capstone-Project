import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index.HtmlComponent } from './index.html.component';

describe('Index.HtmlComponent', () => {
  let component: Index.HtmlComponent;
  let fixture: ComponentFixture<Index.HtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Index.HtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Index.HtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
