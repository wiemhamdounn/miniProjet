import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEtudiantComponent } from './detail-etudiant.component';

describe('DetailEtudiantComponent', () => {
  let component: DetailEtudiantComponent;
  let fixture: ComponentFixture<DetailEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailEtudiantComponent]
    });
    fixture = TestBed.createComponent(DetailEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
