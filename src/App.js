import React from "react";

import { Grid } from "@mui/material";
import SearchField from "./components/SearchField";
import VideoDescription from "./components/VideoDescription";

/*import {SearchMenu, VideoRecord, VideDescription} from './components' ;*/

//import SearchField from "./components/SearchField";
//import VideoDescription from "./components/VideoDescription";
//import VideoRecord from "./components/VideoRecord";
//import VideoDescription from "./components/VideoDescription";

class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null,
  };
  render() {
    const { selectedVideo } = this.state;
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SearchField onFromSubmit={this.handleSubmit}></SearchField>
            </Grid>
            <Grid item xs={8}>
              <VideoDescription video={selectedVideo}></VideoDescription>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
