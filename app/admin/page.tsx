"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AdminUploadMock() {
  const [file, setFile] = useState<File | null>(null);
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setStatus("uploading");
    setTimeout(() => {
      setStatus("success");
      // Reset after a few seconds
      setTimeout(() => {
        setStatus("idle");
        setFile(null);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-navy-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-3xl mb-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-navy-900">Initiative Admin</h1>
            <p className="text-sm text-navy-600/70">Manage website content</p>
          </div>
        </div>
        <Link href="/" className="text-sm font-medium text-gold-600 hover:text-gold-700">
          Back to Site &rarr;
        </Link>
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-navy-100 overflow-hidden"
      >
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 p-8 text-white">
          <h2 className="text-2xl font-bold font-heading">Upload Exam Results</h2>
          <p className="mt-2 text-navy-200">Publish the official results for students to view.</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleUpload} className="space-y-6">
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-navy-700 mb-1">
                Competition Year
              </label>
              <select
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-navy-900 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
              >
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-700 mb-1">
                Results Document (PDF)
              </label>
              <div 
                className={`mt-1 flex justify-center rounded-xl border-2 border-dashed px-6 pt-5 pb-6 transition-colors ${
                  file ? "border-gold-400 bg-gold-50" : "border-navy-200 hover:border-gold-400"
                }`}
              >
                <div className="space-y-1 text-center">
                  {file ? (
                    <div className="flex flex-col items-center">
                      <FileText className="mx-auto h-12 w-12 text-gold-500" />
                      <p className="mt-2 text-sm font-medium text-navy-900">{file.name}</p>
                      <p className="text-xs text-navy-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      <button
                        type="button"
                        onClick={() => setFile(null)}
                        className="mt-2 text-xs font-semibold text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="mx-auto h-12 w-12 text-navy-300" />
                      <div className="flex text-sm text-navy-600 justify-center">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-gold-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-gold-500 focus-within:ring-offset-2 hover:text-gold-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            accept=".pdf"
                            className="sr-only"
                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-navy-500">PDF up to 10MB</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {status === "error" && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Upload failed</h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>There was an error uploading your file. Please try again.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {status === "success" && (
              <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">Upload successful</h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>The results have been published to the website.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                disabled={!file || status === "uploading"}
                className="inline-flex justify-center rounded-lg border border-transparent bg-gold-600 py-3 px-6 text-sm font-medium text-white shadow-sm hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {status === "uploading" ? "Publishing..." : "Publish Results"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
