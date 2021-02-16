import React from "react";
import styled from "styled-components";

import YoutubeIcon from "../../img/Youtube-Icon.png";

const VideoWrapper = styled.div`
  width: 743px;
  height: 419px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #212121;
  margin: 40px 0 40px 34px;
  border-radius: 4px;
  & img {
    cursor: pointer;
    transition: all 200ms;
  }
  & img:hover {
    opacity: 0.9;
  }
`;

function Video() {
  return (
    <VideoWrapper>
      <img src={YoutubeIcon} />
    </VideoWrapper>
  );
}

export default Video;
