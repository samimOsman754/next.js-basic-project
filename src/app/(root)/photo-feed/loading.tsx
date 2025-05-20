const LoadingSkeleton = () => {
  return (
    <main className="container mx-auto animate-pulse">
      <h1 className="text-center text-3xl font-bold my-4 bg-gray-300 h-10 w-1/2 mx-auto rounded"></h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="w-full bg-gray-300 aspect-square rounded"
          ></div>
        ))}
      </div>
    </main>
  );
};

export default LoadingSkeleton;
