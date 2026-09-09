import { FC } from "react";
import { AiFillHeart } from "react-icons/ai";
import {
  BsPauseFill,
  BsPlayFill,
  BsRepeat,
  BsRepeat1,
  BsShuffle,
} from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { useFavoriteMusicsStore } from "store/useFavoriteMusicsStore";
import { usePlayerStore } from "store/usePlayerStore";
import { WaveformPlayer } from "components/WaveformPlayer";
import * as S from "./style";

interface IPlayer {
  bgTransparent?: boolean;
}

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0")}`;
};

export const Player: FC<IPlayer> = ({ bgTransparent = false }) => {
  const {
    currentMusic,
    currentPlaylist,
    currentTime,
    duration,
    isLoading,
    isPlaying,
    isShuffled,
    musicVolume,
    playbackError,
    repeatMode,
    handleMusicVolume,
    handlePlayMusic,
    handleSkipMusic,
    toggleRepeatMode,
    toggleShuffle,
  } = usePlayerStore();
  const { handleFavoriteMusics, favoriteMusics } = useFavoriteMusicsStore();

  const currentIndex = currentPlaylist.findIndex(
    (music) => music.id === currentMusic?.id,
  );
  const isFavorite = favoriteMusics.some(
    (music) => music.id === currentMusic?.id,
  );
  const canGoPrevious = currentIndex > 0;
  const canGoNext =
    isShuffled ||
    (currentIndex >= 0 && currentIndex < currentPlaylist.length - 1);
  const RepeatIcon = repeatMode === "one" ? BsRepeat1 : BsRepeat;

  return (
    <S.Container
      $cover={currentMusic?.album.cover_xl}
      $isTransparent={bgTransparent}
    >
      <S.Content>
        <S.Eyebrow>
          <span /> Now playing
        </S.Eyebrow>

        {!currentMusic ? (
          <S.EmptyState>
            <S.EmptyCover />
            <div>
              <h2>Choose your soundtrack</h2>
              <p>Select a track from the collection to start its preview.</p>
            </div>
          </S.EmptyState>
        ) : (
          <S.NowPlaying>
            <S.CoverWrap>
              <img
                src={currentMusic.album.cover_big}
                alt={`${currentMusic.title} album cover`}
              />
              {isPlaying && <S.PlayingBadge>Playing</S.PlayingBadge>}
            </S.CoverWrap>

            <S.PlayerInfo>
              <S.TrackHeading>
                <div>
                  <p>{currentMusic.album.title}</p>
                  <h2>{currentMusic.title}</h2>
                  <h3>{currentMusic.artist.name}</h3>
                </div>
                <S.FavoriteButton
                  type="button"
                  $isFavorite={isFavorite}
                  onClick={() => handleFavoriteMusics(currentMusic)}
                  aria-label={
                    isFavorite ? "Remove from favorites" : "Add to favorites"
                  }
                  aria-pressed={isFavorite}
                >
                  <AiFillHeart />
                </S.FavoriteButton>
              </S.TrackHeading>

              <S.WaveSection>
                <WaveformPlayer url={currentMusic.preview} />
                <S.Timeline>
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </S.Timeline>
              </S.WaveSection>

              <S.Controls>
                <S.SecondaryButton
                  type="button"
                  $isActive={isShuffled}
                  onClick={toggleShuffle}
                  aria-label="Toggle shuffle"
                  aria-pressed={isShuffled}
                >
                  <BsShuffle />
                </S.SecondaryButton>
                <S.SecondaryButton
                  type="button"
                  onClick={() => handleSkipMusic("prev")}
                  disabled={!canGoPrevious}
                  aria-label="Previous track"
                >
                  <BiSkipPrevious />
                </S.SecondaryButton>
                <S.PlayButton
                  type="button"
                  onClick={handlePlayMusic}
                  disabled={isLoading}
                  aria-label={isPlaying ? "Pause preview" : "Play preview"}
                >
                  {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                </S.PlayButton>
                <S.SecondaryButton
                  type="button"
                  onClick={() => handleSkipMusic("next")}
                  disabled={!canGoNext}
                  aria-label="Next track"
                >
                  <BiSkipNext />
                </S.SecondaryButton>
                <S.SecondaryButton
                  type="button"
                  $isActive={repeatMode !== "off"}
                  onClick={toggleRepeatMode}
                  aria-label={`Repeat mode: ${repeatMode}`}
                >
                  <RepeatIcon />
                </S.SecondaryButton>
              </S.Controls>

              <S.PlayerFooter>
                <span>{isLoading ? "Loading preview..." : "Deezer preview"}</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={musicVolume}
                  onChange={(event) => handleMusicVolume(Number(event.currentTarget.value))}
                  aria-label={`Volume ${Math.round(musicVolume * 100)} percent`}
                />
              </S.PlayerFooter>
              {playbackError && <S.Error role="alert">{playbackError}</S.Error>}
            </S.PlayerInfo>
          </S.NowPlaying>
        )}
      </S.Content>
    </S.Container>
  );
};
