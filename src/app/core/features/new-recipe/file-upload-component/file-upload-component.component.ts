import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-file-upload-component',
    styleUrls: ['./file-upload-component.component.scss'],
    templateUrl: './file-upload-component.component.html',
})
export class FileUploadComponentComponent {
    @Input() formControlLabel: string = '';
    @Input() control: FormControl = {} as FormControl;

    currentFile?: File;
    progress = 0;
    message = '';

    fileName = '';
    fileInfos?: Observable<any>;
    translation = Inject(TranslateService);

    selectFile(event: any): void {
        if (event.target.files && event.target.files[0]) {
            const file: File = event.target.files[0];
            this.currentFile = file;
            this.fileName = this.currentFile.name;
        } else {
            this.fileName = 'formControlLabel';
        }
    }

    upload() {}
}
