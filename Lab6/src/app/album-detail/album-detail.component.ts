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

  constructor(private route: ActivatedRoute,
    private albumService: AlbumService) { // ActivatedRoute is a injectable class, that's why we don't need to create instance with 'new'
    this.album = {} as Album;
  }
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      // this.album = ALBUMS.find((album: Album) => album.id === id) as Album;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
      })
    });
  }
  // const id = Number(this.route.snapshot.paramMap.get('id));

}
