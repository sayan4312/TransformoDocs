import React, { useState } from 'react';

const Hero = () => {
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
  const words = ["Seamless conversion to machine readle","Unlock Data potential Effortless document  ","From non machine readable to smart data."];
  const words2 = ['Transform', 'Your', 'Documents']
  return (
    <>
      <>
      <section className='relative px-10 max-md:px-5 min-h-[78vh] max-md:min-h-[60vh]  flex items-end justify-between max-xl:flex-col max-xl:justify-center'>
        <div className="w-1/2 max-xl:w-full max-xl:order-2  xl:min-h-[60vh] mb-10 flex items-end justify-start ">
          <div className="xl:w-[60%] w-full max-md:min-h-[25vh]  min-h-[20vh] flex items-end flex-col">
            {
              words?.map((t, ind) => (
                <div className="w-full h-10 max-md:h-max  overflow-hidden max-md:mb-5">
                  <p className='text-black font-semibold text-xl max-md:text-lg whitespace-nowrap w-full h-full' id='textHideShow'>{t}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="w-1/2 max-xl:w-full xl:min-h-[60vh] min-h-[35vh] mb-10 flex items-end text-right justify-end ">
          <div className="w-full  xl:min-h-[54vh] min-h-[35vh] flex items-end flex-col justify-end">
            {
              words2?.map((t, ind) => (
                <div className="w-full xl:h-[9rem] -z-20 max-xl:h-[8.1rem] max-lg:h-[7rem] max-md:h-[5.5rem]  overflow-hidden flex items-end justify-end">
                  <p className='w-full h-full text-black font-bold xl:text-[7rem] lg:text-[5.8rem] md:text-[4.9rem] sm:text-5xl text-5xl uppercase' id='textHideShow'>{t}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="absolute bottom-0 w-[95%] -z-20  borderColor"></div>
      </section>
      <div id="hero-shape" className='mt-20 -z-10'>
        <div id="hero-1"></div>
        <div id="hero-2"></div>
        <div id="hero-3"></div>
      </div>
    </>
      <section className="relative px-10 max-md:px-5 min-h-[78vh] max-md:min-h-[60vh] flex items-center justify-center">
        {/* Main container with preview on the right */}
        <div className="flex w-full justify-between items-start max-w-screen-lg">
          
          {/* Main OCR Box */}
          <div className="bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg w-[65%] h-[60vh] flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-4xl font-semibold mb-4 text-black font-bold">OCR a PDF</h2>
            <div className="flex items-center justify-center mb-6">
              {/* Icons representing PDF to Text conversion */}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9yxjWD5j4FHXI5PrLO4fjqHV6NA7G2UQKA&s" alt="OCR Icon" className="w-16 h-16 mr-4" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAA4Wd4bco5Xv33GasXrnDdQT5OFXwa3HUQ&s" alt="PDF Icon" className="w-16 h-16" />
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppdqXtwdmOOlLS6DB5LpSQjM0_g6fOMQebw&s" alt="PDF Icon" className="w-20 h-20 mb-4" />
                <p className="text-black font-semibold text-lg">{selectedFile.name}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;
