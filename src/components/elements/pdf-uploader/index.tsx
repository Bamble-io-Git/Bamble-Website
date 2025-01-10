//@ts-nocheck

import { useCvStore } from "@/store/cv";
import { sendGTMEvent } from "@next/third-parties/google";
import clsx from "clsx";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";

function MyDropzone({ setFile, file }: { setFile: (file: File) => void }) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [fileSize, setFileSize] = useState<number | null>(null);

  const state = useCvStore((state) => state.addToPdf);
  const onDrop = useCallback((acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    if (
      selectedFile &&
      selectedFile.type === "application/pdf" &&
      selectedFile.size < 10000 // 10 KB
    ) {
      setFile(selectedFile);
      state(selectedFile);
      setFileSize(selectedFile?.size);
      handleUpload(selectedFile);

      window.localStorage.setItem("pdfFile", selectedFile);
      window.localStorage.setItem(
        "pdf",
        JSON.stringify({
          ...selectedFile,
          lastModified: selectedFile?.lastModified,
          lastModifiedDate: selectedFile?.lastModifiedDate,
          name: selectedFile?.name,
          size: selectedFile?.size,
          type: "application/pdf",
          webkitRelativePath: "",
        })
      );

      sendGTMEvent({
        event: "Event - Step4 Upload Docs",
        values: "Upload Success",
      });
    } else {
      toast.error("Please upload a valid PDF file (size).");
    }
  }, []);

  const formatFileSize = (size: number): string => {
    const KB = 1024;
    const MB = KB * 1024;

    if (size < KB) return `${size} bytes`;
    if (size < MB) return `${(size / KB).toFixed(2)} KB`;
    return `${(size / MB).toFixed(2)} MB`;
  };

  const handleUpload = async (file: File) => {
    setUploading(true);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async (e) => {
      const base64 = (e?.target?.result as string)?.split(",")[1];
      const binary = atob(base64);

      try {
        // Mock upload to demonstrate progress...
        for (let i = 0; i <= 100; i++) {
          setUploadProgress(i);
          await new Promise((resolve) => setTimeout(resolve, 50)); // Simulating upload delay
        }

        // After successful upload, handle the uploaded binary data here
        console.log("Uploaded PDF binary:", binary);
        localStorage.setItem("pdfBin", binary);
        toast.success("PDF uploaded successfully!");
      } catch (error) {
        console.error("Upload failed:", error);
        toast.error("Failed to upload PDF.");
      } finally {
        setUploading(false);
        setUploadProgress(0);
      }
    };

    reader.onerror = () => {
      console.error("Failed to read the file");
      setUploading(false);
    };
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/pdf",
    multiple: false,
  });

  return (
    <div className="w-[592px]">
      <div
        {...getRootProps()}
        className={clsx(
          file && "border-dashed border-green-600 border bg-green-100",
          "border-dashed border-2 p-3 sm:p-8 min-w-full flex  max-h-[100px]"
        )}
      >
        <input {...getInputProps()} />
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:block hidden"
        >
          <path
            d="M32 32L24 24L16 32"
            stroke="black"
            stroke-opacity="0.4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24 24V42"
            stroke="black"
            stroke-opacity="0.4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M40.7809 36.78C42.7316 35.7165 44.2726 34.0337 45.1606 31.9972C46.0487 29.9607 46.2333 27.6864 45.6853 25.5334C45.1373 23.3803 43.8879 21.471 42.1342 20.1069C40.3806 18.7427 38.2226 18.0014 36.0009 18H33.4809C32.8755 15.6585 31.7472 13.4846 30.1808 11.642C28.6144 9.79927 26.6506 8.33567 24.4371 7.36118C22.2236 6.3867 19.818 5.92669 17.4011 6.01573C14.9843 6.10478 12.619 6.74057 10.4833 7.8753C8.34747 9.01003 6.49672 10.6142 5.07014 12.5671C3.64356 14.5201 2.67828 16.771 2.24686 19.1508C1.81544 21.5305 1.92911 23.977 2.57932 26.3065C3.22954 28.636 4.39938 30.7877 6.0009 32.6"
            stroke="black"
            stroke-opacity="0.4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32 32L24 24L16 32"
            stroke="black"
            stroke-opacity="0.4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="ml-5">
          <p className="text-[13px] font-semibold">
            {file
              ? "File upload successful"
              : "Select a file or drag and drop here"}
          </p>

          <p className="text-[12px] text-gray-500">
            PDF file size no more than 10KB
          </p>
        </div>
      </div>

      {fileSize && (
        <div className="flex justify-between mt-3">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.75391 10.5C10.0494 10.5 10.342 10.4418 10.6149 10.3287C10.8879 10.2157 11.136 10.0499 11.3449 9.84099C11.5538 9.63206 11.7196 9.38402 11.8326 9.11104C11.9457 8.83806 12.0039 8.54547 12.0039 8.25C12.0039 7.95453 11.9457 7.66194 11.8326 7.38896C11.7196 7.11598 11.5538 6.86794 11.3449 6.65901C11.136 6.45008 10.8879 6.28434 10.6149 6.17127C10.342 6.0582 10.0494 6 9.75391 6C9.15717 6 8.58487 6.23705 8.16292 6.65901C7.74096 7.08097 7.50391 7.65326 7.50391 8.25C7.50391 8.84674 7.74096 9.41903 8.16292 9.84099C8.58487 10.2629 9.15717 10.5 9.75391 10.5Z"
                fill="#0F91D2"
                fill-opacity="0.4"
              />
              <path
                d="M21 21C21 21.7956 20.6839 22.5587 20.1213 23.1213C19.5587 23.6839 18.7956 24 18 24H6C5.20435 24 4.44129 23.6839 3.87868 23.1213C3.31607 22.5587 3 21.7956 3 21V3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0L14.25 0L21 6.75V21ZM6 1.5C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V18L7.836 14.664C7.95422 14.5461 8.10843 14.4709 8.27417 14.4506C8.43992 14.4302 8.60773 14.4657 8.751 14.5515L12 16.5L15.2355 11.97C15.2988 11.8815 15.3806 11.8078 15.4753 11.754C15.5699 11.7003 15.6751 11.6678 15.7836 11.6588C15.8921 11.6498 16.0012 11.6645 16.1034 11.702C16.2056 11.7394 16.2985 11.7986 16.3755 11.8755L19.5 15V6.75H16.5C15.9033 6.75 15.331 6.51295 14.909 6.09099C14.4871 5.66903 14.25 5.09674 14.25 4.5V1.5H6Z"
                fill="#0F91D2"
                fill-opacity="0.4"
              />
            </svg>
          </div>
          <div className="flex-2">
            {" "}
            {uploading && (
              <div className="w-full h-2 mt-4 min-w-[400px] bg-gray-300 rounded">
                <div
                  className="h-full bg-[#0F91D2] rounded"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            )}
          </div>
          <div>
            <p> {fileSize! && formatFileSize(fileSize)} </p>
          </div>
        </div>
      )}
    </div>
  );
}

const PdfUpload = ({ setFile, file }) => {
  return (
    <div className="max-w-md bg-white rounded-lg min-w-full max-h-[100px] flex">
      <MyDropzone setFile={setFile} file={file} />
    </div>
  );
};

export default PdfUpload;
