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
  loaded: boolean;
  
  constructor(private albumService: AlbumService) {
    this.albums = [];
    this.loaded = true;
  }

  ngOnInit(): void {
    // this.albums = ALBUMS;
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    })
  }
  
}
