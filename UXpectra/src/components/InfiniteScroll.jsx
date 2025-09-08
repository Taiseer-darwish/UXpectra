import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function InfiniteScroll({ children, onLoadMore, hasMore, className = "" }) {
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setIsLoading(true);
          onLoadMore?.().finally(() => setIsLoading(false));
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoading, onLoadMore]);

  return (
    <div className={className}>
      {children}
      
      {hasMore && (
        <motion.div
          ref={observerRef}
          className="flex justify-center py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isLoading ? (
            <motion.div
              className="w-8 h-8 border-4 border-gray-200 border-t-primary rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          ) : (
            <span className="text-gray-500">Scroll to load more</span>
          )}
        </motion.div>
      )}
    </div>
  );
}
