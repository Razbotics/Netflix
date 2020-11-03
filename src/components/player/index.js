import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Container, Overlay, Inner, Button } from "./styles/player";

export const PlayerContext = createContext();

function Player({ children, ...otherProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...otherProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...otherProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...otherProps}>
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...otherProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return <Button onClick={() => setShowPlayer(!showPlayer)}>Play</Button>;
};

export default Player;
