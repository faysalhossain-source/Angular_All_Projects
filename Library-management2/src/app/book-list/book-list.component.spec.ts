import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistComponent } from './book-list.component';

describe('BooklistComponent', () => {
  let component: BooklistComponent;
  let fixture: ComponentFixture<BooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooklistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
