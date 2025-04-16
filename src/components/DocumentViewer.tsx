import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface DocumentViewerProps {
  documentId: string;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ documentId }) => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    axios.get(`https://second-brain-backend-sugh.onrender.com/documents/${documentId}`, { responseType: 'blob' })
      .then((response) => {
        const url = URL.createObjectURL(response.data);
        setPdfUrl(url);
      })
      .catch((error) => {
        console.error('Error fetching PDF:', error);
      });
  }, [documentId]);

  if (!pdfUrl) return <p className="text-center text-xl">Loading...</p>;

  return (
    <div className="flex justify-center items-center p-4">
      <iframe
        src={pdfUrl}
        title="PDF Document Viewer"
        className="w-full h-[600px] border rounded-lg"
      ></iframe>
    </div>
  );
};

export default DocumentViewer;