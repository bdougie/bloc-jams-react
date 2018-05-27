import React, {Component} from "react";
import {Link} from "react-router-dom";
import albumData from "./../data/albums";
import ".././styles/library.css";
import ".././styles/main.css";

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {albums: albumData};
  }
  render() {
    return (
      <main style={{backgroundColor: "red"}} className="collection">
        <section className="album-covers container clearfix">
          {this.state.albums.map((album, index) => (
            <div className="collection-album-container column fourth" key={index}>
              <p>
                <img src={album.albumCover} alt={album.title} />
                <Link to={`/album/${album.slug}`}>
                  <div className="collection-album-info caption" />
                </Link>
                <div className="album-name">{album.title}</div>
                <a href="#">{album.artists}</a>
                {album.songs.length} songs
              </p>
            </div>
          ))}
        </section>
      </main>
    );
  }
}

export default Library;
