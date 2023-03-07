import { Component, OnInit } from '@angular/core';
import { Album } from "../models";
import { ALBUMS } from "../fake-db";
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[];
  
  constructor(private albumService: AlbumService) {
    this.albums = [];
  }

  ngOnInit(): void {
    // this.albums = ALBUMS;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
  }
  
}
