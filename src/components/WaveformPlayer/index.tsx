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
    currentMusic,
    currentTime,
    duration,
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
    if (
      !currentMusic ||
      !("mediaSession" in navigator) ||
      typeof MediaMetadata === "undefined"
    ) {
      return;
    }

    navigator.mediaSession.metadata = new MediaMetadata({
      title: currentMusic.title,
      artist: currentMusic.artist.name,
      album: currentMusic.album.title,
      artwork: [
        { src: currentMusic.album.cover_small, sizes: "56x56" },
        { src: currentMusic.album.cover_medium, sizes: "250x250" },
        { src: currentMusic.album.cover_big, sizes: "500x500" },
        { src: currentMusic.album.cover_xl, sizes: "1000x1000" },
      ],
    });

    const seekBy = (offset: number) => {
      const state = usePlayerStore.getState();
      const position = state.currentTime + offset;
      const nextPosition = state.duration
        ? Math.min(Math.max(position, 0), state.duration)
        : Math.max(position, 0);
      state.handleSeek(nextPosition);
    };
    const handlers: [MediaSessionAction, MediaSessionActionHandler][] = [
      ["play", () => usePlayerStore.getState().handlePlaybackState(true)],
      ["pause", () => usePlayerStore.getState().handlePlaybackState(false)],
      ["previoustrack", () => usePlayerStore.getState().handleSkipMusic("prev")],
      ["nexttrack", () => usePlayerStore.getState().handleSkipMusic("next")],
      ["seekbackward", (details) => seekBy(-(details.seekOffset ?? 10))],
      ["seekforward", (details) => seekBy(details.seekOffset ?? 10)],
      [
        "seekto",
        (details) => {
          if (details.seekTime !== undefined) {
            usePlayerStore.getState().handleSeek(details.seekTime);
          }
        },
      ],
      [
        "stop",
        () => {
          const state = usePlayerStore.getState();
          state.handlePlaybackState(false);
          state.handleSeek(0);
        },
      ],
    ];

    handlers.forEach(([action, handler]) => {
      try {
        navigator.mediaSession.setActionHandler(action, handler);
      } catch {
        // Safari support varies by action and version.
      }
    });

    return () => {
      handlers.forEach(([action]) => {
        try {
          navigator.mediaSession.setActionHandler(action, null);
        } catch {
          // Ignore actions unsupported by this browser.
        }
      });
      navigator.mediaSession.metadata = null;
      navigator.mediaSession.playbackState = "none";
    };
  }, [currentMusic]);

  useEffect(() => {
    if (!("mediaSession" in navigator)) return;
    navigator.mediaSession.playbackState = isPlaying ? "playing" : "paused";
  }, [currentMusic, isPlaying]);

  useEffect(() => {
    if (
      !("mediaSession" in navigator) ||
      !isReady ||
      !Number.isFinite(duration) ||
      duration <= 0
    ) {
      return;
    }

    try {
      navigator.mediaSession.setPositionState({
        duration,
        playbackRate: 1,
        position: Math.min(Math.max(currentTime, 0), duration),
      });
    } catch {
      // Position reporting is optional on older mobile browsers.
    }
  }, [currentTime, duration, isReady]);

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
