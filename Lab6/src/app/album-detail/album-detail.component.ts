import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { ALBUMS } from '../fake-db';
import { Album } from '../models';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})

export class AlbumDetailComponent implements OnInit{
  album: Album;
  loaded: boolean;

  constructor(private route: ActivatedRoute,
    private albumService: AlbumService) { // ActivatedRoute is a injectable class, that's why we don't need to create instance with 'new'
    this.album = {} as Album;
    this.loaded = true;
  }
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      })
      // this.album = ALBUMS.find((album: Album) => album.id === id) as Album;
    });
  }
  // const id = Number(this.route.snapshot.paramMap.get('id));

}
