import { PlaylistInterface } from '../../../../interfaces/playlist.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HorizontalListService {
  items: Array<PlaylistInterface>;
  constructor() {
    this.items = [
      {
        title: 'Test Playlist',
        created_by: 'Himanshu Pandey',
        id: 'some-random-id',
        artists: [
          {
            name: 'Himanshu Pandey',
          },
          {
            name: 'Random Person',
          },
          {
            name: 'John Doe',
          },
          {
            name: 'Pandey Himanshu',
          },
        ],
        cover: 'assets/images/7_rings.png',
      },
      {
        title: 'Test Playlist',
        created_by: 'Himanshu Pandey',
        id: 'some-random-id',
        artists: [
          {
            name: 'Himanshu Pandey',
          },
          {
            name: 'Random Person',
          },
          {
            name: 'John Doe',
          },
          {
            name: 'Pandey Himanshu',
          },
        ],
        cover: 'assets/images/7_rings.png',
      },
      {
        title: 'Test Playlist',
        created_by: 'Himanshu Pandey',
        id: 'some-random-id',
        artists: [
          {
            name: 'Himanshu Pandey',
          },
          {
            name: 'Random Person',
          },
          {
            name: 'John Doe',
          },
          {
            name: 'Pandey Himanshu',
          },
        ],
        cover: 'assets/images/7_rings.png',
      },
      {
        title: 'Test Playlist',
        created_by: 'Himanshu Pandey',
        id: 'some-random-id',
        artists: [
          {
            name: 'Himanshu Pandey',
          },
          {
            name: 'Random Person',
          },
          {
            name: 'John Doe',
          },
          {
            name: 'Pandey Himanshu',
          },
        ],
        cover: 'assets/images/7_rings.png',
      },
      {
        title: 'Test Playlist',
        created_by: 'Himanshu Pandey',
        id: 'some-random-id',
        artists: [
          {
            name: 'Himanshu Pandey',
          },
          {
            name: 'Random Person',
          },
          {
            name: 'John Doe',
          },
          {
            name: 'Pandey Himanshu',
          },
        ],
        cover: 'assets/images/7_rings.png',
      },
    ];
  }
}