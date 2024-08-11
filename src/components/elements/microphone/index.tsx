import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useAudioRecorder } from 'react-audio-voice-recorder';

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

  const [recordingBlob, setRecordingBlob] = useState<Blob | undefined>(
    undefined
  );

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

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <button onClick={() => setShowKeyboard(true)}>
            <Image width={40} height={40} alt="" src="/assets/keyboard.svg" />
          </button>
        </div>
        <div>
          <button onClick={startRecording}>
            <Image alt="" src="assets/speaking.svg" height={168} width={168} />
          </button>
        </div>
        <div>
          <button onClick={stopRecording}>
            <Image width={40} height={40} alt="" src="/assets/cancel.svg" />
            {/* {isRecording && '......'} for {recordingTime}ms */}
          </button>

          {/* <button
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Please record your voice first"
            disabled={recordingBlob === undefined}
            onClick={handlePlay}
            className="bg-green-accent p-3 rounded-lg shadow-md disabled:bg-gray-200 disabled:cursor-not-allowed cursor-pointer"
          >
            Play
          </button> */}
        </div>
      </div>
      <div className="flex items-center">
        <Image width={16} height={16} alt="" src="/assets/info.svg" />
        <p className="text-[#217DD1] ml-3">
          <strong> You have 20 seconds left! </strong>
          prepare to finish your presentation.
        </p>
      </div>
    </div>
  );
};

export default Microphone;
