import { Icon } from "@mui/material";
import { Button } from "@mui/joy";
import Document from "app/models/Document";

interface DocumentListProps {
  documents: Document[];
  id: string;
}

export default function DocumentList({ documents, id }: DocumentListProps) {
  return (
    <div style={{ display: "grid", gap: "10px", justifyContent: "center" }}>
      {documents.map((document: Document, index: number) => (
        <Button
          key={index}
          sx={{
            backgroundColor: "#289837",
            ":hover": { backgroundColor: "#39b54a" },
          }}
          onClick={() => {
            window.open(
              `/assets/${id}/documents/${document.fileName}`,
              "_blank"
            );
          }}
          startDecorator={<Icon>{document.icon}</Icon>}
        >
          {document.name}
        </Button>
      ))}
    </div>
  );
}
