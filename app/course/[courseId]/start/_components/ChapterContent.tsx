import { ChapterContentType, ChapterType } from "@/types/types";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import ReactMarkdown from "react-markdown";

type ChapterContentProps = {
  chapter: ChapterType | null;
  content: ChapterContentType | null;
};

const videoOpts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 0,
  },
};

const ChapterContent = ({ chapter, content }: ChapterContentProps) => {
  console.log("📌 Chapter:", chapter);
  console.log("📌 Content:", content);

  if (!chapter) return <p className="text-gray-500">No chapter selected.</p>;
  if (!content) return <p className="text-gray-500">Loading content...</p>;

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="p-10">
      <h2 className="font-medium text-2xl">{chapter?.chapter_name || "Untitled Chapter"}</h2>
      <p className="text-gray-500">{chapter?.description || "No description available."}</p>

      {/* YouTube Video */}
      {content?.videoId ? (
        <div className="flex justify-center my-6">
          <YouTube videoId={content.videoId} opts={videoOpts} onReady={onPlayerReady} />
        </div>
      ) : (
        <p className="text-gray-500 mt-3">No video available for this chapter.</p>
      )}

      {/* Chapter Content */}
      {content.content && Array.isArray(content.content) && content.content.length > 0 ? (
        content.content.map((item, index) => (
          <div key={index} className="my-5 bg-sky-50 rounded-lg p-5">
            <h2 className="font-medium text-lg">{item.title || "No Title"}</h2>
            <ReactMarkdown className="mt-3">{item.explanation || "No explanation provided."}</ReactMarkdown>

            {/* Code Examples */}
            {item.code_examples && Array.isArray(item.code_examples) && item.code_examples.length > 0 && (
              <div className="bg-black text-white p-5 mt-3 rounded-md overflow-auto">
                {item.code_examples.map((example, idx) => {
                  // Ensure example.code is a string before calling replace()
                  const codeString = typeof example.code === "string"
                    ? example.code
                    : Array.isArray(example.code)
                    ? example.code.join("")
                    : String(example.code);

                  return (
                    <pre key={idx} className="whitespace-pre-wrap">
                      <code>{codeString.replace(/<\/?precode>/g, "")}</code>
                    </pre>
                  );
                })}
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-500 mt-5">No additional content available for this chapter.</p>
      )}
    </div>
  );
};

export default ChapterContent;
