import { BsArrowRight, BsBarChartFill, BsPlayFill } from "react-icons/bs";
import { usePlayerStore } from "store/usePlayerStore";
import * as S from "./style";

const formatDuration = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0")}`;

export const UpNext = () => {
  const { currentMusic, currentPlaylist, isPlaying, handleCurrentMusic } =
    usePlayerStore();
  const currentIndex = currentPlaylist.findIndex(
    (music) => music.id === currentMusic?.id,
  );
  const queueStart = currentIndex >= 0 ? currentIndex : 0;
  const queue = currentPlaylist.slice(queueStart, queueStart + 6);

  return (
    <S.Container>
      <S.Header>
        <div>
          <span>Queue</span>
          <h2>Up next</h2>
        </div>
        <a href="#library" aria-label="View complete playlist">
          <BsArrowRight />
        </a>
      </S.Header>

      {queue.length === 0 ? (
        <S.Empty>No tracks waiting in the queue.</S.Empty>
      ) : (
        <S.List>
          {queue.map((track, index) => {
            const isCurrent = track.id === currentMusic?.id;
            return (
              <li key={track.id}>
                <S.TrackButton
                  type="button"
                  $isCurrent={isCurrent}
                  onClick={() => handleCurrentMusic(track)}
                  aria-label={`Play ${track.title} by ${track.artist.name}`}
                >
                  <S.Index>
                    {isCurrent && isPlaying ? (
                      <BsBarChartFill />
                    ) : (
                      String(queueStart + index + 1).padStart(2, "0")
                    )}
                  </S.Index>
                  <img src={track.album.cover_small} alt="" />
                  <S.TrackInfo>
                    <strong>{track.title}</strong>
                    <span>{track.artist.name}</span>
                  </S.TrackInfo>
                  <S.Duration>
                    {isCurrent ? <BsPlayFill /> : formatDuration(track.duration)}
                  </S.Duration>
                </S.TrackButton>
              </li>
            );
          })}
        </S.List>
      )}

      <S.ViewAll href="#library">
        View complete playlist <BsArrowRight />
      </S.ViewAll>
    </S.Container>
  );
};
