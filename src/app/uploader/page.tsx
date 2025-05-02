"use client";

import { UploadButton } from "@/utils/uploadthing";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='w-full max-w-xl p-8 bg-white rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Upload Image</h2>

        <div className='ut-button-container'>
          <UploadButton
            endpoint='imageUploader'
            onClientUploadComplete={(res) => {
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
            appearance={{
              button:
                "ut-ready:bg-green-500 bg-blue-600 hover:bg-blue-700 ut-uploading:cursor-not-allowed rounded-lg ut-uploading:bg-blue-400",
              container: "w-full flex flex-col items-center justify-center",
              allowedContent:
                "flex flex-col items-center justify-center text-gray-600 mt-2",
            }}
          />
        </div>
      </div>
    </main>
  );
}
