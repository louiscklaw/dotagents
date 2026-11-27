const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel, AlignmentType, WidthType, BorderStyle, ShadingType, LevelFormat } = require('docx');

const TABLE_WIDTH = 4680;
const cellBorders = { 
    top: { style: BorderStyle.SINGLE, size: 1 }, 
    bottom: { BorderStyle.SINGLE, size: 1 }, // ERROR HERE! Missing key 'style'
    left: { style: BorderStyle.SINGLE, size: 1 }, 
    right: { style: BorderStyle.SINGLE, size: 1 } 
};
