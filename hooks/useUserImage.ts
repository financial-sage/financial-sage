import { useState, useEffect } from 'react';
import { AppSession } from '@/lib/types';
import { useImageLoader } from './useImageLoader';

export function useUserImage(session: AppSession | null) {
  const [userImageUrl, setUserImageUrl] = useState<string>("/default-avatar.svg");
  
  useEffect(() => {
    if (!session?.user) {
      setUserImageUrl("/default-avatar.svg");
      return;
    }

    const user = session.user;
    
    // Buscar imagen en diferentes campos posibles
    const possibleImages = [
      user.picture,
      user.metadata?.picture,
      user.metadata?.avatar_url,
      user.metadata?.image,
      user.metadata?.profile_picture,
      user.metadata?.photo,
    ].filter(Boolean) as string[];
    
    if (possibleImages.length > 0) {
      const selectedImage = possibleImages[0];
      setUserImageUrl(selectedImage);
    } else {
      setUserImageUrl("/default-avatar.svg");
    }
  }, [session]);

  const { imgSrc, isLoading, hasError } = useImageLoader(userImageUrl);
  
  return { imgSrc, isLoading, hasError };
}
