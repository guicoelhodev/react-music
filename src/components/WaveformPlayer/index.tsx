import { useEffect, useRef } from "react";
import { useWavesurfer } from "@wavesurfer/react";
import { usePlayerStore } from "store/usePlayerStore";
import * as S from "./style";

type WaveformPlayerProps = {
  url?: string;
};

export const WaveformPlayer = ({ url }: WaveformPlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    isPlaying,
    musicVolume,
    seekTo,
    handleDuration,
    handleLoading,
    handlePlaybackError,
    handlePlaybackState,
    handleProgress,
    handleTrackEnd,
  } = usePlayerStore();

  const { wavesurfer, isReady } = useWavesurfer({
    container: containerRef,
    url,
    height: 76,
    waveColor: "#17335a",
    progressColor: "#20d9ee",
    cursorColor: "#8bf4ff",
    cursorWidth: 2,
    barWidth: 2,
    barGap: 3,
    barRadius: 4,
    dragToSeek: true,
    normalize: true,
  });

  useEffect(() => {
    if (url) return;
    handleLoading(false);
    handlePlaybackError("No preview is available for this track.");
  }, [url, handleLoading, handlePlaybackError]);

  useEffect(() => {
    if (!wavesurfer) return;

    const unsubscribeReady = wavesurfer.on("ready", (duration) => {
      handleDuration(duration);
      handleLoading(false);
      handlePlaybackError(null);
      wavesurfer.setVolume(usePlayerStore.getState().musicVolume);

      if (usePlayerStore.getState().isPlaying) {
        wavesurfer.play().catch(() => {
          handlePlaybackError("Playback was blocked. Press play to try again.");
        });
      }
    });
    const unsubscribePlay = wavesurfer.on("play", () =>
      handlePlaybackState(true),
    );
    const unsubscribePause = wavesurfer.on("pause", () =>
      handlePlaybackState(false),
    );
    const unsubscribeTime = wavesurfer.on("timeupdate", handleProgress);
    const unsubscribeFinish = wavesurfer.on("finish", () => {
      const repeatCurrent = usePlayerStore.getState().repeatMode === "one";
      handleTrackEnd();

      if (repeatCurrent) {
        wavesurfer.setTime(0);
        wavesurfer.play().catch(() => {
          handlePlaybackError("Unable to repeat this preview.");
        });
      }
    });
    const unsubscribeError = wavesurfer.on("error", () =>
      handlePlaybackError("This preview could not be loaded."),
    );

    return () => {
      unsubscribeReady();
      unsubscribePlay();
      unsubscribePause();
      unsubscribeTime();
      unsubscribeFinish();
      unsubscribeError();
    };
  }, [
    wavesurfer,
    handleDuration,
    handleLoading,
    handlePlaybackError,
    handlePlaybackState,
    handleProgress,
    handleTrackEnd,
  ]);

  useEffect(() => {
    if (!wavesurfer || !isReady) return;

    wavesurfer.setVolume(musicVolume);

    if (seekTo !== null) wavesurfer.setTime(seekTo);

    if (isPlaying && !wavesurfer.isPlaying()) {
      wavesurfer.play().catch(() => {
        handlePlaybackError("Playback was blocked. Press play to try again.");
      });
    } else if (!isPlaying && wavesurfer.isPlaying()) {
      wavesurfer.pause();
    }
  }, [
    wavesurfer,
    isReady,
    isPlaying,
    musicVolume,
    seekTo,
    handlePlaybackError,
  ]);

  return (
    <S.Waveform aria-label="Audio preview waveform">
      {(!url || !isReady) && <S.StaticWave aria-hidden="true" />}
      <S.Wave ref={containerRef} $isVisible={Boolean(url && isReady)} />
    </S.Waveform>
  );
};
