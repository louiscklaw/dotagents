const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel, AlignmentType, WidthType, BorderStyle, ShadingType, LevelFormat } = require('docx');

const TABLE_WIDTH = 4680;
const cellBorders = { 
    top: { style: BorderStyle.SINGLE, size: 1 }, 
    bottom: { style: BorderStyle.SINGLE, size: 1 }, 
    left: { style: BorderStyle.SINGLE, size: 1 }, 
    right: { style: BorderStyle.SINGLE, size: 1 } 
};

const createCell = (text, isHeader = false) => {
    return new TableCell({
        borders: cellBorders,
        width: { size: TABLE_WIDTH, type: WidthType.DXA },
        shading: isHeader ? { fill: "D5E8F0", type: ShadingType.CLEAR } : { type: ShadingType.CLEAR },
        children: [new Paragraph({ 
            alignment: isHeader ? AlignmentType.CENTER : AlignmentType.LEFT, 
            children: [new TextRun({ text, bold: isHeader })] 
        })]
    });
};

const children = [];

children.push(new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("DOCX Management Skill Guide")] }));

children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Overview")] }));
children.push(new Paragraph({ children: [new TextRun("A user may ask you to create, edit, or analyze the contents of a .docx file. A .docx file is essentially a ZIP archive containing XML files and other resources that you can read or edit.")] }));

children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Workflow Decision Tree")] }));
children.push(new Table({
    columnWidths: [TABLE_WIDTH, TABLE_WIDTH],
    rows: [
        new TableRow({
            tableHeader: true,
            children: [createCell("Task", true), createCell("Recommended Workflow", true)]
        }),
        new TableRow({
            children: [createCell("Reading/Analyzing Content"), createCell("Text extraction or Raw XML access")]
        }),
        new TableRow({
            children: [createCell("Creating New Document"), createCell("Creating a new Word document workflow")]
        }),
        new TableRow({
            children: [createCell("Editing Existing Document"), createCell("Basic OOXML editing or Redlining workflow")]
        }),
    ]
}));

children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Reading and Analyzing Content")] }));
children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Text Extraction")] }));
children.push(new Paragraph({ children: [new TextRun("Convert the document to markdown using pandoc for efficient reading and preservation of structure.")] }));
children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Raw XML Access")] }));
children.push(new Paragraph({ children: [new TextRun("Unpack the document to access comments, complex formatting, document structure, embedded media, and metadata.")] }));

children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Creating a New Word Document")] }));
children.push(new Paragraph({ children: [new TextRun("Use docx-js to create documents from scratch using JavaScript/TypeScript components.")] }));

children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Editing an Existing Word Document")] }));
children.push(new Paragraph({ children: [new TextRun("Use the Document library for OOXML manipulation. Unpack, edit with a Python script, and pack the final document.")] }));

children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Redlining Workflow for Document Review")] }));
children.push(new Paragraph({ children: [new TextRun("A professional workflow for implementing tracked changes systematically in batches of 3-10 changes to ensure precision and quality.")] }));

children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Converting Documents to Images")] }));
children.push(new Paragraph({ children: [new TextRun("Convert DOCX to PDF using LibreOffice, then convert PDF pages to JPEG images using pdftoppm.")] }));

children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Dependencies")] }));
children.push(new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("pandoc")] }));
children.push(new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("docx")] }));
children.push(new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("LibreOffice")] }));
children.push(new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Poppler")] }));
children.push(new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("defusedxml")] }));

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 24 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 56, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 240, after: 120 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 240, after: 240 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 180, after: 180 }, outlineLevel: 1 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullet-list",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ]
  },
  sections: [{
    properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    children: children
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("readme.docx", buffer);
  console.log("readme.docx created successfully");
}).catch(err => {
  console.error("Error creating doc:", err);
});
