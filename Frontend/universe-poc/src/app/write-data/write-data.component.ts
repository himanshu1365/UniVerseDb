import { Component } from '@angular/core'
import { UniverseDataService } from '../service/universe-data.service'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-write-data',
  templateUrl: './write-data.component.html',
  styleUrls: ['./write-data.component.css']
})
export class WriteDataComponent{

  constructor(private dataService: UniverseDataService) { }

  uploadedFiles : Array <File>

  submitForm  = new FormGroup({
    filename : new FormControl(),
    recordname : new FormControl()
  })

  get filename(){ return this.submitForm.get('filename') }

  get recordname(){ return this.submitForm.get('recordname') }

  submitData(submitForm) {
    let formData = new FormData()
    formData.append('file',this.uploadedFiles[0],this.uploadedFiles[0].name)
    formData.append('recordname',submitForm.value.recordname)
    formData.append('filename',submitForm.value.filename)
    this.dataService.submitData(formData)
    .subscribe(res=>{
      console.log(res)
    })
  }

  fileChange(element){
    this.uploadedFiles = element.target.files
  }

}
