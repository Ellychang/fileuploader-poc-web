import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedFilesList } from './uploaded-files-list';

describe('UploadedFilesList', () => {
  let component: UploadedFilesList;
  let fixture: ComponentFixture<UploadedFilesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadedFilesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadedFilesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
