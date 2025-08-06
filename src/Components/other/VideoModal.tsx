interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const extractVideoId = (url: string) => {
  // Handle YouTube Shorts
  const shortsRegex = /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
  const shortsMatch = url.match(shortsRegex);
  if (shortsMatch) return shortsMatch[1];

  // Handle regular YouTube videos
  const videoRegex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const videoMatch = url.match(videoRegex);
  return videoMatch ? videoMatch[1] : null;
};

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
}: VideoModalProps) {
  if (!isOpen) return null;

  const videoId = extractVideoId(videoUrl);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center bg-black bg-opacity-25">
      <div className="fixed inset-0 bg-black bg-opacity-75" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 z-10"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Video Container */}
        <div className="aspect-video">
          {videoId ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Project Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Invalid video URL
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
