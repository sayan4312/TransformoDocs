import React, { useState } from 'react';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false); // State to track file processing status
  const [ocrProcessedFile, setOcrProcessedFile] = useState(null); // State for OCR-processed file

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file)
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setOcrProcessedFile(null); // Reset processed file when a new file is selected
      console.log('File selected:', file); // Display selected file info in console
    } else {
      alert('Please select a valid PDF file.');
    }
  };

  // Handle file upload button click
  const handleFileUpload = () => {
    if (!selectedFile) {
      alert('Please select a file first.');
      return;
    }

    // Simulate file processing (could be replaced by actual API call)
    setIsProcessing(true);

    // Simulate processing delay
    setTimeout(() => {
      console.log('Processing the selected file for OCR:', selectedFile);

      // Simulating the URL for the processed OCR PDF file (this could be from your server)
      const processedFileUrl = URL.createObjectURL(selectedFile); // This will just simulate the same file for demo
      setOcrProcessedFile(processedFileUrl);

      alert('File processed successfully!');
      setIsProcessing(false);
    }, 2000);
  };
  
  return (
    <>
      <section className="relative px-10 max-md:px-5 min-h-[78vh] max-md:min-h-[60vh] flex items-center justify-center">
        {/* Main container with preview on the right */}
        <div className="flex w-full justify-between items-start max-w-screen-lg">
          
          {/* Main OCR Box */}
          <div className="bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg w-[65%] h-[60vh] flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-4xl font-semibold mb-4 text-black font-bold">OCR a PDF</h2>
            <div className="flex items-center justify-center mb-6">
              {/* Icons representing PDF to Text conversion */}
              <img src="" alt="OCR Icon" className="w-16 h-16 mr-4" />
              <img src="C:\Users\sayan\OneDrive\Desktop\,,\transformo\transformo\src\components\landing-components\pdff[1].jpg" alt="PDF Icon" className="w-16 h-16" />
            </div>
            <p className="text-xl mb-6 text-black font-bold">
              Drag and drop a PDF file to recognize text in it using OCR technology, creating a searchable PDF.
            </p>

            {/* File input */}
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />
            <label htmlFor="fileInput" className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg cursor-pointer font-bold">
              Select a file
            </label>

            {/* Upload Button */}
            {selectedFile && !isProcessing && !ocrProcessedFile && (
              <button
                className="mt-4 bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-bold"
                onClick={handleFileUpload}
              >
                Upload and Process File
              </button>
            )}

            {/* Loading Indicator while processing */}
            {isProcessing && <p className="mt-4 text-lg text-blue-600 font-bold">Processing file...</p>}

            {/* Download Button after processing */}
            {ocrProcessedFile && (
              <a
                href={ocrProcessedFile}
                download={`OCR_${selectedFile.name}`} // Download file with OCR_ prefixed
                className="mt-4 bg-purple-600 text-white py-3 px-6 rounded-lg text-lg font-bold"
              >
                Download OCR Processed PDF
              </a>
            )}
          </div>

          {/* File Preview Box to the right */}
          {selectedFile && (
            <div className="ml-6 w-[30%] bg-white p-6 border border-gray-300 rounded-lg flex flex-col items-center justify-center h-[60vh]">
              <h3 className="text-2xl font-bold mb-4">File Preview</h3>

              <div className="w-full h-full flex flex-col items-center justify-center">
                {/* PDF Preview */}
                <img src="your-pdf-icon-source.svg" alt="PDF Icon" className="w-20 h-20 mb-4" />
                <p className="text-black font-semibold text-lg">{selectedFile.name}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Upload;
