import { motion } from 'framer-motion';
import { useState } from 'react';

export default function VideoUpload({ onVideoSelect, className = "" }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      setSelectedVideo(file);
      onVideoSelect?.(file);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setSelectedVideo(file);
      onVideoSelect?.(file);
    }
  };

  return (
    <motion.div
      className={`border-2 border-dashed rounded-lg p-6 text-center ${
        isDragOver ? 'border-primary bg-primary/5' : 'border-gray-300'
      } ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {selectedVideo ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <video
            src={URL.createObjectURL(selectedVideo)}
            className="w-full h-32 object-cover rounded-lg mb-2"
            controls
          />
          <p className="text-sm font-medium text-gray-900">{selectedVideo.name}</p>
        </motion.div>
      ) : (
        <motion.div
          className="text-gray-500"
          animate={{ scale: isDragOver ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-sm font-medium text-gray-900">
            Drag and drop a video here, or click to select
          </p>
          <p className="text-xs text-gray-500">MP4, AVI, MOV up to 100MB</p>
        </motion.div>
      )}
      
      <input
        type="file"
        accept="video/*"
        onChange={handleFileSelect}
        className="hidden"
        id="video-upload"
      />
      
      <motion.label
        htmlFor="video-upload"
        className="mt-2 inline-block px-4 py-2 bg-primary text-white text-sm font-medium rounded-md cursor-pointer hover:bg-primary-dark"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Choose Video
      </motion.label>
    </motion.div>
  );
}
