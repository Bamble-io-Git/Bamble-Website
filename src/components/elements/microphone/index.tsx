import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useAudioRecorder } from 'react-audio-voice-recorder';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { toast } from 'react-toastify';

const Microphone = ({
  setShowKeyboard,
  setRecording,
}: {
  setShowKeyboard: Dispatch<SetStateAction<boolean>>;
  setRecording: Dispatch<SetStateAction<Blob | undefined>>;
}) => {
  const {
    startRecording,
    stopRecording,
    recordingBlob: record,
    isRecording,
    recordingTime,
  } = useAudioRecorder();

  // clear recording
  // add toast to show One recording session\
  // X should clear recording
  //Remove select file button

  console.log('recordingTime', recordingTime);

  const [recordingBlob, setRecordingBlob] = useState<Blob | undefined>(
    undefined
  );

  const [remainingTime, setRemainingTime] = useState(120);

  const handleClearRecording = () => {
    setRecordingBlob(undefined);
    setRecording(undefined);
    setRemainingTime(120); // Reset timer if needed
    stopRecording();
  };

  useEffect(() => {
    if (isRecording) {
      const intervalId = setInterval(() => {
        setRemainingTime((prevTime) => Math.max(0, prevTime - 1));
      }, 1000);

      toast.info('You have 2 minutes to record your cv, check tips ︖');

      return () => clearInterval(intervalId); // Clean up interval on unmount
    }
  }, [isRecording]);

  useEffect(() => {
    if (remainingTime === 0) {
      stopRecording();
    }
  }, [remainingTime, stopRecording]);

  useEffect(() => {
    if (record) {
      setRecordingBlob(record);
      setRecording(record);
    }
  }, [record]);

  useEffect(() => {
    if (!recordingBlob) return;
    // recordingBlob will be present at this point after 'stopRecording' has been called
  }, [recordingBlob]);

  const handlePlay = () => {
    if (recordingBlob) {
      // check with chris if he wants this format
      const audio = new Audio(URL.createObjectURL(recordingBlob));
      audio.play();
    }
  };

  console.log('recordingBlob', recordingBlob);

  const path = usePathname();

  const convertRecordingTimeToMMSS = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div>
      <p className="text-[#217DD1] text-center">
        {remainingTime >= 20 &&
          isRecording &&
          convertRecordingTimeToMMSS(recordingTime)}
      </p>
      <div className="flex justify-between items-center">
        <div>
          <button
            onClick={() => setShowKeyboard(true)}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Type here!"
          >
            <Image width={40} height={40} alt="" src="/assets/keyboard.svg" />
          </button>
        </div>
        <div>
          <button
            onClick={isRecording ? stopRecording : startRecording}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={
              isRecording ? 'Click to finish' : 'Click to record'
            }
          >
            {isRecording ? (
              <Image
                alt=""
                src="assets/speaking.svg"
                height={156}
                width={156}
              />
            ) : (
              <svg
                width="162"
                height="163"
                viewBox="0 0 162 163"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_3487_9613)">
                  <circle cx="81" cy="81.5" r="40" fill="#217DD1" />
                </g>
                <g clip-path="url(#clip0_3487_9613)">
                  <path
                    d="M68.8438 76.7812C69.2167 76.7812 69.5744 76.9294 69.8381 77.1931C70.1018 77.4569 70.25 77.8145 70.25 78.1875V81C70.25 83.9837 71.4353 86.8452 73.545 88.955C75.6548 91.0647 78.5163 92.25 81.5 92.25C84.4837 92.25 87.3452 91.0647 89.455 88.955C91.5647 86.8452 92.75 83.9837 92.75 81V78.1875C92.75 77.8145 92.8982 77.4569 93.1619 77.1931C93.4256 76.9294 93.7833 76.7812 94.1562 76.7812C94.5292 76.7812 94.8869 76.9294 95.1506 77.1931C95.4143 77.4569 95.5625 77.8145 95.5625 78.1875V81C95.5625 84.4862 94.2677 87.8481 91.9291 90.4335C89.5905 93.019 86.375 94.6436 82.9062 94.9922V100.688H91.3438C91.7167 100.688 92.0744 100.836 92.3381 101.099C92.6018 101.363 92.75 101.721 92.75 102.094C92.75 102.467 92.6018 102.824 92.3381 103.088C92.0744 103.352 91.7167 103.5 91.3438 103.5H71.6562C71.2833 103.5 70.9256 103.352 70.6619 103.088C70.3982 102.824 70.25 102.467 70.25 102.094C70.25 101.721 70.3982 101.363 70.6619 101.099C70.9256 100.836 71.2833 100.688 71.6562 100.688H80.0938V94.9922C76.625 94.6436 73.4095 93.019 71.0709 90.4335C68.7323 87.8481 67.4375 84.4862 67.4375 81V78.1875C67.4375 77.8145 67.5857 77.4569 67.8494 77.1931C68.1131 76.9294 68.4708 76.7812 68.8438 76.7812Z"
                    fill="#FCFCFC"
                  />
                  <path
                    d="M87.125 81C87.125 82.4918 86.5324 83.9226 85.4775 84.9775C84.4226 86.0324 82.9918 86.625 81.5 86.625C80.0082 86.625 78.5774 86.0324 77.5225 84.9775C76.4676 83.9226 75.875 82.4918 75.875 81V66.9375C75.875 65.4457 76.4676 64.0149 77.5225 62.96C78.5774 61.9051 80.0082 61.3125 81.5 61.3125C82.9918 61.3125 84.4226 61.9051 85.4775 62.96C86.5324 64.0149 87.125 65.4457 87.125 66.9375V81ZM81.5 58.5C79.2622 58.5 77.1161 59.3889 75.5338 60.9713C73.9514 62.5536 73.0625 64.6997 73.0625 66.9375V81C73.0625 83.2378 73.9514 85.3839 75.5338 86.9662C77.1161 88.5486 79.2622 89.4375 81.5 89.4375C83.7378 89.4375 85.8839 88.5486 87.4662 86.9662C89.0486 85.3839 89.9375 83.2378 89.9375 81V66.9375C89.9375 64.6997 89.0486 62.5536 87.4662 60.9713C85.8839 59.3889 83.7378 58.5 81.5 58.5Z"
                    fill="#FCFCFC"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_3487_9613"
                    x="11.0795"
                    y="20.1282"
                    width="139.841"
                    height="139.841"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8.5487" />
                    <feGaussianBlur stdDeviation="14.9602" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.227451 0 0 0 0 0.682353 0 0 0 0 0.972549 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3487_9613"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3487_9613"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_3487_9613">
                    <rect
                      width="45"
                      height="45"
                      fill="white"
                      transform="translate(59 58.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
          </button>
        </div>
        <div>
          <button
            onClick={handleClearRecording}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Click to delete recording"
          >
            <Image width={40} height={40} alt="" src="/assets/cancel.svg" />
            {/* {isRecording && '......'} for {recordingTime}ms */}
          </button>

          <Tooltip id="my-tooltip">
            <p>Click to play your recording</p>
          </Tooltip>
        </div>
      </div>
      {remainingTime < 20 && (
        <div className="flex items-center">
          <Image width={16} height={16} alt="" src="/assets/info.svg" />

          <p className="text-[#217DD1] ml-3 sm:text-[18px] text-sm">
            <strong> You have {remainingTime} seconds left! </strong>
            prepare to finish your presentation.
          </p>
        </div>
      )}
    </div>
  );
};

export default Microphone;
