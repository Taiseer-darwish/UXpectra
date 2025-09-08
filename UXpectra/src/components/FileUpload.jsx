import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FileUpload({ onFileSelect, className = "" }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

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
    if (file) {
      setSelectedFile(file);
      onFileSelect?.(file);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect?.(file);
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
      <motion.div
        className="text-gray-500"
        animate={{ scale: isDragOver ? 1.1 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {selectedFile ? (
          <div>
            <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
            <p className="text-xs text-gray-500">
              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ) : (
          <div>
            <p className="text-sm font-medium text-gray-900">
              Drag and drop a file here, or click to select
            </p>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        )}
      </motion.div>
      
      <input
        type="file"
        onChange={handleFileSelect}
        className="hidden"
        id="file-upload"
      />
      
      <motion.label
        htmlFor="file-upload"
        className="mt-2 inline-block px-4 py-2 bg-primary text-white text-sm font-medium rounded-md cursor-pointer hover:bg-primary-dark"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Choose File
      </motion.label>
    </motion.div>
  );
}
