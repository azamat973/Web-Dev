import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  error: string | null = null;  // Қате туралы хабарлама үшін
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.loadAlbum();
  }

  loadAlbum(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);
    
    // ID тексеру
    if (isNaN(id) || id <= 0) {
      this.error = 'Қате альбом ID';
      this.loading = false;
      return;
    }

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
        console.log('Альбом жүктелді:', this.album);
      },
      error: (err) => {
        console.error('Альбомды жүктеу қатесі:', err);
        this.error = 'Альбомды жүктеу мүмкін болмады';
        this.loading = false;
      }
    });
  }

  saveTitle(): void {
    if (!this.album) return;
    
    // Егер өзгеріс жоқ болса, сақтамау
    if (this.editedTitle === this.album.title) {
      return;
    }

    const updatedAlbum = { ...this.album, title: this.editedTitle };
    
    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (response) => {
        this.album = response;
        console.log('Альбом жаңартылды');
      },
      error: (err) => {
        console.error('Жаңарту қатесі:', err);
        this.error = 'Сақтау мүмкін болмады';
      }
    });
  }
}