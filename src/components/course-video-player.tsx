"use client";

import { useEffect, useRef, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface Props {
  lessonId: string;
  videoId: string;
  initialMaxWatchedSecond?: number;
  initialCompleted?: boolean;
}

export default function CourseVideoPlayer({
  lessonId,
  videoId,
  initialMaxWatchedSecond = 0,
  initialCompleted = false,
}: Props) {
  const playerRef = useRef<any>(null);

  const completedRef =
    useRef(initialCompleted);

  const previousTimeRef =
    useRef(0);

  const maxAllowedPositionRef =
    useRef(initialMaxWatchedSecond);

  const seekLockedRef =
    useRef(false);

  const [showWarning, setShowWarning] =
    useState(false);

  const onReady: YouTubeProps["onReady"] = (
    event
  ) => {
    playerRef.current =
      event.target;

    const startTime =
      event.target.getCurrentTime();

    const savedPosition =
      Math.max(0, initialMaxWatchedSecond);

    previousTimeRef.current =
      Math.max(startTime, savedPosition);

    maxAllowedPositionRef.current =
      Math.max(startTime, savedPosition);

    completedRef.current =
      initialCompleted;

    seekLockedRef.current =
      false;

    if (savedPosition > 0 && !initialCompleted) {
      event.target.seekTo(savedPosition, true);
    }
  };

  const onEnd: YouTubeProps["onEnd"] =
    async () => {
      completedRef.current =
        true;

      if (!playerRef.current)
        return;

      try {
        const duration =
          playerRef.current.getDuration();

        if (!duration || duration <= 0)
          return;

        await fetch(
          "/api/lesson-progress",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              lessonId,
              currentTime: duration,
              duration,
              seekDetected: false,
            }),
          }
        );
      } catch (error) {
        console.error(
          "Progress completion error:",
          error
        );
      }
    };

  useEffect(() => {
    const interval = setInterval(
      async () => {
        if (!playerRef.current)
          return;

        if (completedRef.current)
          return;

        try {
          const currentTime =
            playerRef.current.getCurrentTime();

          const duration =
            playerRef.current.getDuration();

          if (
            !duration ||
            duration <= 0 ||
            Number.isNaN(currentTime)
          ) {
            return;
          }

          /*
           * FORWARD SEEK DETECTION
           *
           * Allow rewinding.
           * Block jumping ahead of watched content.
           */
          const attemptedForwardSeek =
            currentTime >
            maxAllowedPositionRef.current + 10;

          if (
            attemptedForwardSeek
          ) {
            seekLockedRef.current =
              true;

            playerRef.current.seekTo(
              maxAllowedPositionRef.current,
              true
            );

            setShowWarning(true);

            console.log(
              "Forward seek blocked",
              {
                attempted:
                  currentTime,
                allowed:
                  maxAllowedPositionRef.current,
              }
            );

            return;
          }

          /*
           * Update furthest watched point.
           */
          maxAllowedPositionRef.current =
            Math.max(
              maxAllowedPositionRef.current,
              currentTime
            );

          const response =
            await fetch(
              "/api/lesson-progress",
              {
                method: "POST",
                headers: {
                  "Content-Type":
                    "application/json",
                },
                body: JSON.stringify({
                  lessonId,
                  currentTime,
                  duration,
                  seekDetected:
                    seekLockedRef.current,
                }),
              }
            );

          if (response.ok) {
            const result =
              await response.json();

            if (
              result.completed
            ) {
              completedRef.current =
                true;
            }
          }

          previousTimeRef.current =
            currentTime;
        } catch (error) {
          console.error(
            "Progress tracking error:",
            error
          );
        }
      },
      5000
    );

    return () =>
      clearInterval(interval);
  }, [lessonId]);

  return (
    <>
      {showWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="max-w-md rounded-xl bg-white p-6 shadow-xl">
            <h3 className="mb-3 text-lg font-semibold text-red-600">
              Forward Seeking Detected
            </h3>

            <p className="text-sm text-gray-700">
              Jumping ahead in the video is not allowed.
              You may rewind and rewatch content, but
              you cannot skip ahead of the portion you
              have already watched.
            </p>

            <button
              onClick={() =>
                setShowWarning(false)
              }
              className="mt-4 rounded-lg bg-[#4c1711] px-4 py-2 text-white"
            >
              Continue Watching
            </button>
          </div>
        </div>
      )}

      <div className="overflow-hidden rounded-2xl shadow-lg">
        <YouTube
          videoId={videoId}
          onReady={onReady}
          onEnd={onEnd}
          className="w-full min-h-[600px]"
          iframeClassName="w-full min-h-[600px]"
          opts={{
            width: "100%",
            height: "600",
            playerVars: {
              rel: 0,
              modestbranding: 1,
            },
          }}
        />
      </div>
    </>
  );
}
