import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  error: string | null = null;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
        console.log(`${this.albums.length} альбом жүктелді`);
      },
      error: (err) => {
        console.error('Қате:', err);
        this.error = 'Альбомдарды жүктеу мүмкін болмады';
        this.loading = false;
      }
    });
  }
}