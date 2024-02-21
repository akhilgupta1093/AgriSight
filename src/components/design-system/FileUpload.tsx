import React, { useState, DragEvent, ChangeEvent } from "react";

const FileUpload = ({
  selectedFile,
  setSelectedFile,
}: {
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false); // State to track hover status

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Create a URL for the file
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Create a URL for the file
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px]">
      <label
        htmlFor="fileInput"
        className="text-center mt-2 cursor-pointer relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="border-2 border-dashed border-gray-300 p-5 text-center text-gray-600 relative h-full flex items-center justify-center"
        >
          {previewUrl ? (
            <>
              <img
                src={previewUrl}
                alt="Preview"
                className="mx-auto max-h-52"
              />
              {isHovering && (
                <div className="absolute inset-0 bg-gray-500 bg-opacity-30 flex justify-center items-center text-white text-lg">
                  Click to replace
                </div>
              )}
            </>
          ) : (
            "Drag and drop or click to select an image."
          )}
        </div>
      </label>
      <input
        type="file"
        onChange={handleFileChange}
        className="hidden"
        id="fileInput"
        accept="image/*"
      />
      {selectedFile && <p>File selected: {selectedFile.name}</p>}
    </div>
  );
};

export default FileUpload;
