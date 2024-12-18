"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";

export function FileUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [designInstructions, setDesignInstructions] = useState("");

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUpload = async () => {
    setUploading(true);
    // TODO: Implement file upload to Appwrite
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
    setUploading(false);
    setFiles([]);
    setDesignInstructions("");
  };

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-md p-8 text-center cursor-pointer ${
          isDragActive ? "border-primary" : "border-muted-foreground"
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
        <p className="mt-2">Drag & drop files here, or click to select files</p>
      </div>
      {files.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Selected Files:</h3>
          <ul className="list-disc pl-5">
            {files.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="designInstructions">Design Instructions</Label>
        <Textarea
          id="designInstructions"
          placeholder="Enter any specific instructions for your design..."
          value={designInstructions}
          onChange={(e) => setDesignInstructions(e.target.value)}
          rows={4}
        />
      </div>
      {uploading && <Progress value={progress} className="w-full" />}
      <Button onClick={handleUpload} disabled={files.length === 0 || uploading}>
        {uploading ? "Uploading..." : "Upload Files"}
      </Button>
    </div>
  );
}
