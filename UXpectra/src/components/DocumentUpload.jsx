import { motion } from 'framer-motion';
import { useState } from 'react';

export default function DocumentUpload({ onDocumentSelect, className = "" }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

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
    if (file && (file.type === 'application/pdf' || file.type.includes('document'))) {
      setSelectedDocument(file);
      onDocumentSelect?.(file);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'application/pdf' || file.type.includes('document'))) {
      setSelectedDocument(file);
      onDocumentSelect?.(file);
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
      {selectedDocument ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
            <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm font-medium text-gray-900">{selectedDocument.name}</p>
          <p className="text-xs text-gray-500">
            {(selectedDocument.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </motion.div>
      ) : (
        <motion.div
          className="text-gray-500"
          animate={{ scale: isDragOver ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-sm font-medium text-gray-900">
            Drag and drop a document here, or click to select
          </p>
          <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
        </motion.div>
      )}
      
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileSelect}
        className="hidden"
        id="document-upload"
      />
      
      <motion.label
        htmlFor="document-upload"
        className="mt-2 inline-block px-4 py-2 bg-primary text-white text-sm font-medium rounded-md cursor-pointer hover:bg-primary-dark"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Choose Document
      </motion.label>
    </motion.div>
  );
}
