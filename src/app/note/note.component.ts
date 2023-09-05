import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NoteService } from './note.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent  {
  noteForm!: FormGroup;
  notes!:Note [];
  consultationId!:number;
  constructor(private fb: FormBuilder, private noteService: NoteService,    private route: ActivatedRoute
    ) {

    this.noteForm = this.fb.group({
      newNote: ['', Validators.required],
    }); 
  }
  ngOnInit() {
    this.getAllNotes();
    this.route.params.subscribe(params => {
      this.consultationId = +params['id'];
      console.log(this.consultationId)
    })
  }

  public getAllNotes(): void {
    this.noteService.getNotes().subscribe(
      (response: Note[]) =>{
        this.notes = response;
        this.noteForm.patchValue({
          note: this.notes
        });
        console.log(response)
      },
      (error:HttpErrorResponse)=>{
        console.log(error)
      }
    )
  }

  public addNote(): void  {
    console.log(this.noteForm.value)
    this.noteService.createNote(this.noteForm.value).subscribe(
      
      (response: Note) => {
        this.notes.push(response); // Add the new note to the notes array
        this.noteForm.reset(); // Reset the form
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }







}
