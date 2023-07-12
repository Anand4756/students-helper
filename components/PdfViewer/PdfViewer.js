import {useState} from 'react';
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PdfViewer({ pdfUrls }) {
  const [numPages, setNumPage] = useState(null);
  const [pageNumber, setPageNumber] = useState(null);

  function onDocumentLoad({numPages}) {
    setNumPage(numPages);
    setPageNumber(1);
  }

  return (
    <div>
      {pdfUrls.map((pdfUrl, index) => (
        <div key={index} >
          <Document file={pdfUrl} onLoadSuccess={onDocumentLoad}>

              <Page pageNumber={pageNumber} />

          </Document>
          <p>{pageNumber} of {numPages}</p>
        </div>
      ))}
    </div>
  );
}
