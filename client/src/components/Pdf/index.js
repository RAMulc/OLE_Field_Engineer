import React from 'react';
// import { Document, Page } from 'react-pdf';
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import samplePdf from '../../pdf/00-H-08-0012.pdf';

function Pdf() {
    return (
        <Document file={samplePdf}>
            <Page pageNumber={1} />
        </Document>
    );
}

export default Pdf;