// In the case of posthog.capture(), it seems to be using a callback-based approach for handling the completion of the tracking event. This means that when you call posthog.capture(), it initiates the tracking operation but doesn't directly return a Promise that you can await.

import posthog from 'posthog-js';

export const posthogPromiseWrapper = (
  event: string,
  data: Record<string, string | Record<string, string>>
): Promise<unknown> => {
  const captureEvent = new Promise((resolve, reject): void => {
    try {
      resolve(
        posthog.capture(event, data, {
          transport: 'sendBeacon',
        })
      );
    } catch (error) {
      reject(error);
    }
  });

  return captureEvent;
};
